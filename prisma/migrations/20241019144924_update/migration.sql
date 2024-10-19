/*
  Warnings:

  - You are about to drop the column `oldPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - Added the required column `normalPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suggestedPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "oldPrice",
DROP COLUMN "price",
ADD COLUMN     "normalPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "suggestedPrice" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "customPrice" DECIMAL(65,30),
ADD COLUMN     "oldPrice" DECIMAL(65,30),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Disponivel',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "status" SET DEFAULT 'Ativa';
