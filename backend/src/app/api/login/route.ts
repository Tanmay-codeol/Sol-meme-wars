import { addWallet } from "@/utils/solana";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req: Request) {
  const { message, signature, wallet } = await req.json();
  try {
    const result = await addWallet(message, signature, wallet);
    if (!result) {
      return NextResponse.json(
        { error: "Failed to add wallet" },
        { status: 400, headers: corsHeaders }
      );
    }
    return NextResponse.json(result, {
      headers: corsHeaders,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add wallet" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(req: Request) {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405, headers: { "Access-Control-Allow-Origin": "*" } }
  );
}
