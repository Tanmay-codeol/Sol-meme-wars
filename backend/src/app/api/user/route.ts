import { getUserProfile } from "@/utils/dbUtils";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const wallet = searchParams.get("wallet");
  if (!wallet) {
    return NextResponse.json(
      { error: "Missing wallet address" },
      { status: 400 }
    );
  }
  try {
    const user = await getUserProfile(wallet);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get user profile" },
      { status: 500 }
    );
  }
}
