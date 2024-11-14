-- CreateTable
CREATE TABLE "subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "intro" TEXT NOT NULL,
    "fee" TEXT NOT NULL,
    "courseBook" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subject_name_key" ON "subject"("name");
