-- CreateTable
CREATE TABLE "Snag" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "raisedById" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Snag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Snag" ADD CONSTRAINT "Snag_raisedById_fkey" FOREIGN KEY ("raisedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
