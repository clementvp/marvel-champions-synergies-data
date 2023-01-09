import { PrismaClient } from "@prisma/client";

const createLang = async (prismaClient: PrismaClient) => {
  await prismaClient.lang.createMany({
    data: [
      { id: "FR", name: "Francais" },
      { id: "EN", name: "English" },
      { id: "ES", name: "Espanol" },
      { id: "IT", name: "Italiano" },
      { id: "DE", name: "Deutsch" },
      { id: "KO", name: "Korean" },
    ],
    skipDuplicates: true,
  });
};

export default createLang;
