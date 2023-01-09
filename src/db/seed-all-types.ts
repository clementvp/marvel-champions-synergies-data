import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllTypes = (db: PrismaClient) => {
  const allTypes = jsonfile.readFileSync("./data/ORIGINAL/types/types.json");

  const data = allTypes.map((type) => {
    return {
      id: uuidv5(type.code, process.env.UUID_NAMESPACE),
      code: type.code,
    };
  });

  return db.type.createMany({ data, skipDuplicates: true });
};

export default seedAllTypes;
