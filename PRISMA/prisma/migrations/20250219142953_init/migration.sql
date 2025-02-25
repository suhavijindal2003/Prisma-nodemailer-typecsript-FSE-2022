-- AlterTable
ALTER TABLE "user" ADD COLUMN     "otp" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
