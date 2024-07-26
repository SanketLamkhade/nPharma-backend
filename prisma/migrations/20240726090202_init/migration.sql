/*
  Warnings:

  - You are about to drop the column `HQ` on the `Routes` table. All the data in the column will be lost.
  - Added the required column `hq` to the `Routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Routes" DROP COLUMN "HQ",
ADD COLUMN     "hq" TEXT NOT NULL;
