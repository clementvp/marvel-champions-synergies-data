import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllTraits = (db: PrismaClient) => {
  const allTraits = jsonfile.readFileSync("./data/ORIGINAL/allTraits.json");
  const data = allTraits.map((trait) => {
    return {
      id: uuidv5(trait.code, process.env.UUID_NAMESPACE),
      code: trait.code,
      name: trait.name,
    };
  });
  return db.trait.createMany({ data, skipDuplicates: true });
};

export default seedAllTraits;
