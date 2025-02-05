import { CHALLENGE_PREFIX } from "@/utils/constant";
import { generateNonce } from "@/utils/solana";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req: Request) {
  const { wallet } = await req.json();
  try {
    const message = CHALLENGE_PREFIX + generateNonce(wallet);
    return NextResponse.json(message, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to toggle upvote" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(req: Request) {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405, headers: corsHeaders }
  );
}
