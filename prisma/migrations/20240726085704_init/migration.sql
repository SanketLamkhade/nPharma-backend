-- CreateTable
CREATE TABLE "Routes" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "routeDescription" TEXT NOT NULL,
    "HQ" TEXT NOT NULL,

    CONSTRAINT "Routes_pkey" PRIMARY KEY ("id")
);
