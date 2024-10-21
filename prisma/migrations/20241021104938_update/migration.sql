/*
  Warnings:

  - You are about to drop the column `oldPrice` on the `Stock` table. All the data in the column will be lost.
  - Added the required column `suggestedPrice` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "oldPrice",
ADD COLUMN     "normalPrice" TEXT,
ADD COLUMN     "suggestedPrice" TEXT NOT NULL;
