-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "telefone" REAL NOT NULL,
    "senha" INTEGER NOT NULL,
    "fotoPerfil" TEXT NOT NULL,
    "diaPagamento" DATETIME NOT NULL,
    "categoria" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "altura" REAL NOT NULL,
    "peso" REAL NOT NULL,
    "focoAreaCorpo" TEXT NOT NULL,
    "objetivo" TEXT NOT NULL,
    "TreinoSemanal" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" REAL NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Personal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" REAL NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Treinos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exercicioId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "qtdSerie" INTEGER NOT NULL,
    "repeticoesSerie" INTEGER NOT NULL,
    "intervaloTempo" INTEGER NOT NULL,
    "duracao" INTEGER NOT NULL,
    "volume" REAL NOT NULL,
    "calorias" REAL NOT NULL,
    CONSTRAINT "Treinos_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "Exercicio" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Treinos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercicio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foto" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "HistoricoTreinos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "treinoId" INTEGER NOT NULL,
    "dataTreino" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "HistoricoTreinos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "HistoricoTreinos_treinoId_fkey" FOREIGN KEY ("treinoId") REFERENCES "Treinos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
