import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllSets = (db: PrismaClient) => {
  const allSets = jsonfile.readFileSync("./data/ORIGINAL/sets/sets.json");
  const data = allSets.map((set) => {
    return {
      id: uuidv5(set.code, process.env.UUID_NAMESPACE),
      code: set.code,
      type_id: uuidv5(set.card_set_type_code, process.env.UUID_NAMESPACE),
    };
  });

  return db.set.createMany({ data, skipDuplicates: true });
};

export default seedAllSets;
