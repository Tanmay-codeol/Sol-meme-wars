import { NextRequest, NextResponse } from "next/server";
import { getNotPostedNFTByWallet, getWalletNFTs } from "@/utils/solana";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const notPosted = searchParams.get("notPosted");

  if (!address) {
    return new NextResponse(
      JSON.stringify({
        error: "Wallet address is required in the query parameters",
      }),
      {
        status: 400,
      }
    );
  }

  try {
    let nfts;
    if (notPosted == "true") {
      nfts = await getNotPostedNFTByWallet(address);
    } else {
      nfts = await getWalletNFTs(address);
    }
    return new NextResponse(JSON.stringify({ nfts }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return new NextResponse(
      JSON.stringify({
        error:
          "Failed to fetch NFTs. Please check the wallet address and try again.",
      }),
      {
        status: 500,
      }
    );
  }
}
