/*
  Warnings:

  - Changed the type of `fee` on the `subject` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "subject" ALTER COLUMN "intro" DROP NOT NULL,
DROP COLUMN "fee",
ADD COLUMN     "fee" INTEGER NOT NULL,
ALTER COLUMN "instructor" DROP NOT NULL;
