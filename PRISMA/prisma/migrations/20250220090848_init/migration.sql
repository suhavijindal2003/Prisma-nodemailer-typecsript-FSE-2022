-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);
