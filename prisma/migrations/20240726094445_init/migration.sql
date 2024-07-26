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
