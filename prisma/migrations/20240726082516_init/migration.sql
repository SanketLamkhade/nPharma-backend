/*
  Warnings:

  - Changed the type of `empId` on the `CreateNTP` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CreateNTP" DROP COLUMN "empId",
ADD COLUMN     "empId" INTEGER NOT NULL;
