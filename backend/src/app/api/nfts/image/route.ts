import { getImageUrlByNftMint } from "@/utils/solana";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nftMint = searchParams.get("nftMint");
  if (!nftMint) {
    return NextResponse.json({ error: "Missing NFT mint" }, { status: 400 });
  }
  try {
    const image = await getImageUrlByNftMint(nftMint);
    return NextResponse.json(image);
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return NextResponse.json(
      { error: "Failed to get image URL" },
      { status: 500 }
    );
  }
}
