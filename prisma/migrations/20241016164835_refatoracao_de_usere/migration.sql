-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastPayment" TIMESTAMP(3),
ADD COLUMN     "paymentStatus" TEXT NOT NULL DEFAULT 'Active';
