-- CreateTable
CREATE TABLE "routes" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "routeDescription" TEXT NOT NULL,
    "hq" TEXT NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);
