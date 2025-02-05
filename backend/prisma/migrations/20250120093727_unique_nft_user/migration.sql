/*
  Warnings:

  - A unique constraint covering the columns `[nftMint,creator]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Post_creator_idx";

-- CreateIndex
CREATE INDEX "Post_creator_nftMint_idx" ON "Post"("creator", "nftMint");

-- CreateIndex
CREATE UNIQUE INDEX "Post_nftMint_creator_key" ON "Post"("nftMint", "creator");
