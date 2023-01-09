import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllFactions = async (db: PrismaClient) => {
  const allFactions = jsonfile.readFileSync(
    "./data/ORIGINAL/factions/factions.json"
  );

  const data = allFactions.map((faction) => {
    return {
      id: uuidv5(faction.code, process.env.UUID_NAMESPACE),
      code: faction.code,
    };
  });
  return db.faction.createMany({ data, skipDuplicates: true });
};

export default seedAllFactions;
