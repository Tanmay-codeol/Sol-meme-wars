import { Connection, PublicKey } from "@solana/web3.js";
import {
  getAssociatedTokenAddress,
  createTransferInstruction,
} from "@solana/spl-token";
import prisma from "@/lib/db";
import {
  CHALLENGE_PREFIX,
  NONCE_JWT_EXPIRATION_TIME,
  SOLANA_RPC_URL,
} from "./constant";
import { Metadata, Metaplex } from "@metaplex-foundation/js";
import * as crypto from "crypto";
import * as nacl from "tweetnacl";
import bs58 from "bs58";

export async function verifyNFTOwnership(
  mintAddress: string,
  walletAddress: string
) {
  const connection = new Connection(SOLANA_RPC_URL);
  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
    new PublicKey(walletAddress),
    { mint: new PublicKey(mintAddress) }
  );

  return {
    verified: tokenAccounts.value.length > 0,
    tokenAccount: tokenAccounts.value[0]?.pubkey,
  };
}

export async function createNFTTransferInstruction(
  postId: string | number,
  seller: string,
  buyer: string
) {
  const post = await prisma.post.findUnique({ where: { id: Number(postId) } });
  if (!post) {
    throw new Error(`Post with ID ${postId} not found`);
  }
  const mintPubkey = new PublicKey(post.nftMint);
  const sellerPubkey = new PublicKey(seller);
  const buyerPubkey = new PublicKey(buyer);

  const sellerTokenAccount = await getAssociatedTokenAddress(
    mintPubkey,
    sellerPubkey
  );
  const buyerTokenAccount = await getAssociatedTokenAddress(
    mintPubkey,
    buyerPubkey,
    true
  );

  return createTransferInstruction(
    sellerTokenAccount,
    buyerTokenAccount,
    sellerPubkey,
    1
  );
}

export async function getWalletNFTs(walletAddress: string) {
  const connection = new Connection(SOLANA_RPC_URL);
  const metaplex = new Metaplex(connection);

  const nfts = await metaplex
    .nfts()
    .findAllByOwner({ owner: new PublicKey(walletAddress) });

  return nfts;
}

export async function getImageUrlByURI(uri: string) {
  const response = await fetch(uri);
  const data = await response.json();
  if (Array.isArray(data)) {
    return data[0].image;
  }
  return data.image;
}

export async function getNFTByMint(mint: string) {
  const connection = new Connection(SOLANA_RPC_URL);
  const metaplex = new Metaplex(connection);

  const nft = await metaplex
    .nfts()
    .findByMint({ mintAddress: new PublicKey(mint) });
  return nft;
}

export async function getNotPostedNFTByWallet(walletAddress: string) {
  const nfts = await getWalletNFTs(walletAddress);

  const mintAddresses = nfts.map((nft) => (nft as any).mintAddress.toString());
  const postedNFTs = await prisma.post.findMany({
    where: { nftMint: { in: mintAddresses } },
    select: { nftMint: true },
  });

  const postedMintAddresses = postedNFTs.map((post) => post.nftMint);

  // Filter out posted NFTs
  const notPostedNFTs = nfts.filter(
    (nft) => !postedMintAddresses.includes((nft as any).mintAddress.toString())
  );

  return notPostedNFTs;
}

export function generateNonce(wallet: string): string {
  const expires = Date.now() + NONCE_JWT_EXPIRATION_TIME;
  const data = `${wallet}:${expires}`;
  const hmac = crypto
    .createHmac("sha256", process.env.HMAC_SECRET ?? "secret")
    .update(data)
    .digest("hex");
  console.log(`Generated nonce for wallet ${wallet}: ${data}:${hmac}`);
  return `${data}:${hmac}`;
}

export async function verifyNonce(nonce: string, wallet: string) {
  try {
    console.log(`Verifying nonce for wallet ${wallet}, nonce: ${nonce}`);
    const [expires, hmac] = nonce.split(":");
    console.log(`Expires: ${expires}, HMAC: ${hmac}`);
    const data = `${wallet}:${expires}`;
    const expectedHmac = crypto
      .createHmac("sha256", process.env.HMAC_SECRET ?? "secret")
      .update(data)
      .digest("hex");
    console.log(`Expected HMAC: ${expectedHmac}`);
    console.log(`Received HMAC: ${hmac}`);
    if (hmac !== expectedHmac) {
      throw new Error("Invalid HMAC");
    }

    if (Number(expires) < Date.now()) {
      throw new Error("Expired nonce");
    }

    console.log(`Nonce verified for wallet ${wallet}`);
    return { data: Number(expires), error: null };
  } catch (error) {
    console.error(`Error verifying nonce for wallet ${wallet}: ${error}`);
    return { data: null, error: error };
  }
}

export async function verifySignature(
  message: string,
  signature: string,
  wallet: string
) {
  try {
    const messageUint8 = new TextEncoder().encode(message);
    const signatureUint8 = bs58.decode(signature);
    const publicKeyUint8 = bs58.decode(wallet);

    console.log(`Signature length: ${signatureUint8.length}`);
    console.log(`Public Key length: ${publicKeyUint8.length}`);

    if (signatureUint8.length !== nacl.sign.signatureLength) {
      throw new Error("Invalid signature length");
    }
    if (publicKeyUint8.length !== nacl.sign.publicKeyLength) {
      throw new Error("Invalid public key length");
    }

    const isValid = nacl.sign.detached.verify(
      messageUint8,
      signatureUint8,
      publicKeyUint8
    );

    console.log(
      `Signature verification result for wallet ${wallet}: ${isValid}`
    );
    return isValid;
  } catch (error) {
    console.error(
      `Error in verifying signature for wallet ${wallet}: ${error}`
    );
    return false;
  }
}

export async function addWallet(
  message: string,
  signature: string,
  wallet: string
) {
  try {
    console.log(`message: ${message}`);
    const nonceObj = message.split(":");
    console.log(`nonceObj: ${nonceObj}`);
    const nonceString = `${nonceObj[2]}:${nonceObj[3]}`;
    console.log(`nonceString: ${nonceString}`);
    const nonce = await verifyNonce(nonceString, wallet);
    if (nonce.error) {
      throw new Error(`Nonce verification failed: ${nonce.error}`);
    }
    const expectedMessage = `${CHALLENGE_PREFIX}${wallet}:${nonceString}`;
    if (message !== expectedMessage) {
      throw new Error("Message does not match expected format");
    }
    const isValid = await verifySignature(message, signature, wallet);
    if (!isValid) {
      throw new Error("Signature verification failed");
    }

    const user = await prisma.user.upsert({
      where: { walletAddress: wallet },
      update: { lastActive: new Date() },
      create: { walletAddress: wallet, lastActive: new Date() },
    });

    console.log(`Wallet ${wallet} added/updated successfully`);
    return { status: "success", user };
  } catch (error) {
    console.error(`Error adding wallet ${wallet}: ${error}`);
    return null;
  }
}

export async function getImageUrlByNftMint(mint: string) {
  const nft = await getNFTByMint(mint);
  return nft.json?.image ?? "";
}
