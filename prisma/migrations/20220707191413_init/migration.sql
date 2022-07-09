-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "weight_min" INTEGER NOT NULL,
    "weight_max" INTEGER NOT NULL,
    "feed" TEXT NOT NULL,
    "size" REAL NOT NULL
);
