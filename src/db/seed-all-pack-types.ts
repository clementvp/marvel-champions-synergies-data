import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllPackTypes = async (db: PrismaClient) => {
  const packTypes = jsonfile.readFileSync(
    "./data/ORIGINAL/pack-types/packtypes.json"
  );

  const data = packTypes.map((type) => {
    return {
      id: uuidv5(type.code, process.env.UUID_NAMESPACE),
      code: type.code,
    };
  });
  return db.packType.createMany({ data, skipDuplicates: true });
};

export default seedAllPackTypes;
