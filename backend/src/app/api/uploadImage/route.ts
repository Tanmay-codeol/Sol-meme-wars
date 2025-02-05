import { updateUsername, updateUserProfileImage } from "@/utils/dbUtils";
import { addWallet } from "@/utils/solana";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("Received request");

    const formData = await req.formData();
    console.log("Form data parsed");

    const file = formData.get("file") as File;
    if (!file) {
      console.error("No file provided");
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!file.type) {
      console.error("File type not provided");
      return NextResponse.json(
        { error: "File type not provided" },
        { status: 400 }
      );
    }
    const fileBuffer = await file.arrayBuffer();
    if (!fileBuffer) {
      console.error("Failed to read file buffer");
      return NextResponse.json(
        { error: "Failed to read file buffer" },
        { status: 500 }
      );
    }
    console.log("File retrieved from form data");

    const message = formData.get("message") as string;
    const signature = formData.get("signature") as string;
    const wallet = formData.get("wallet") as string;
    const username = formData.get("username") as string | null;
    if (!message || !signature || !wallet) {
      console.error("Missing required fields: message, signature, or wallet");
      return NextResponse.json(
        { error: "Missing required fields: message, signature, or wallet" },
        { status: 400 }
      );
    }
    console.log("Message, signature, and wallet retrieved from form data");
    console.log(`Message: ${message}`);
    console.log(`Signature: ${signature}`);
    console.log(`Wallet: ${wallet}`);

    const result = await addWallet(message, signature, wallet);
    // const result = true;
    if (!result) {
      console.error(
        "Failed to add wallet. Please check your message and signature."
      );
      return NextResponse.json(
        {
          error:
            "Failed to add wallet. Please check your message and signature.",
        },
        { status: 400 }
      );
    }
    console.log("Wallet added successfully");

    const awsClient = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.AWS_SECRET_KEY_ID ?? "",
      },
    });
    const bucket = process.env.AWS_BUCKET_NAME || "";
    if (!bucket) {
      console.error("AWS bucket name is not configured");
      return NextResponse.json(
        { error: "AWS bucket name is not configured" },
        { status: 500 }
      );
    }
    console.log("AWS client and bucket configured");

    const key = `uploads/${randomUUID()}`;
    console.log(`Generated S3 key: ${key}`);

    const uploadParams = {
      Bucket: bucket,
      Key: key,
      Body: Buffer.from(fileBuffer),
      ContentType: file.type,
    };

    await awsClient.send(new PutObjectCommand(uploadParams));
    console.log("File uploaded to S3");

    const url = `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    console.log(`File URL: ${url}`);
    if (username) {
      console.log("Updating username");
      await updateUsername(wallet, username);
    }
    const updatedUser = await updateUserProfileImage(wallet, url);
    if (!updatedUser) {
      console.error("Failed to update user profile image");
      return NextResponse.json(
        { error: "Failed to update user profile image" },
        { status: 500 }
      );
    }
    console.log("User profile image updated successfully");

    return NextResponse.json(
      { success: true, user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request", error);
    return NextResponse.json(
      { error: "Internal server error", message: (error as any).message },
      { status: 500 }
    );
  }
}
