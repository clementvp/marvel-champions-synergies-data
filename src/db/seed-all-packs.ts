import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllPacks = async (db: PrismaClient) => {
  const allPacks = jsonfile.readFileSync(
    "./data/ORIGINAL/packs-definition/packs.json"
  );

  const data = allPacks.map((pack) => {
    return {
      id: uuidv5(pack.code, process.env.UUID_NAMESPACE),
      code: pack.code,
      type_id: uuidv5(pack.pack_type_code, process.env.UUID_NAMESPACE),
      date_release: pack.date_release,
      position: pack.position,
      size: pack.size,
    };
  });
  return db.pack.createMany({ data, skipDuplicates: true });
};
export default seedAllPacks;
