import { toggleDownvote } from "@/utils/dbUtils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { postId, user } = await req.json();
  try {
    const result = await toggleDownvote(postId, user);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to toggle downvote" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}
