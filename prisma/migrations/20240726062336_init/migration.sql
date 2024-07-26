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
    "empId" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "pob" INTEGER NOT NULL,

    CONSTRAINT "CreateNTP_pkey" PRIMARY KEY ("id")
);
