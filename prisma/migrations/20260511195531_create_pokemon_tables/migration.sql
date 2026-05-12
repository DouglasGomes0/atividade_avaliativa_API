-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "numeroPokedex" INTEGER NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "tipo1Id" INTEGER NOT NULL,
    "tipo2Id" INTEGER,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tipagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tipagem_nome_key" ON "Tipagem"("nome");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_tipo1Id_fkey" FOREIGN KEY ("tipo1Id") REFERENCES "Tipagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_tipo2Id_fkey" FOREIGN KEY ("tipo2Id") REFERENCES "Tipagem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
