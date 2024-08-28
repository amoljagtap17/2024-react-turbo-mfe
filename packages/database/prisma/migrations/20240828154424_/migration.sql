/*
  Warnings:

  - The primary key for the `ConfigurableOption` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ConfigurableOption" DROP CONSTRAINT "ConfigurableOption_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ConfigurableOption_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ConfigurableOption_id_seq";
