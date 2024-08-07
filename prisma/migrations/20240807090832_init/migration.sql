-- CreateTable
CREATE TABLE "attendance" (
    "id" SERIAL NOT NULL,
    "inTime" TEXT NOT NULL,
    "outTime" TEXT NOT NULL,
    "empId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "empName" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);
