-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "division" "Role" NOT NULL DEFAULT 'BASIC',
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "empId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreateNTP" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "station" TEXT NOT NULL,
    "tpName" TEXT NOT NULL,
    "tpType" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "empId" INTEGER NOT NULL,
    "route" TEXT NOT NULL,
    "pob" INTEGER NOT NULL,
    "doctorIds" TEXT[],

    CONSTRAINT "CreateNTP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "routeDescription" TEXT NOT NULL,
    "hq" TEXT NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
