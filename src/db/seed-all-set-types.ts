import { v5 as uuidv5 } from "uuid";
import jsonfile from "jsonfile";
import { PrismaClient } from "@prisma/client";

const seedAllSetTypes = (db: PrismaClient) => {
  const allSetTypes = jsonfile.readFileSync(
    "./data/ORIGINAL/set-types/settypes.json"
  );
  const data = allSetTypes.map((setType) => {
    return {
      id: uuidv5(setType.code, process.env.UUID_NAMESPACE),
      code: setType.code,
      name: setType.name,
    };
  });
  return db.setType.createMany({ data, skipDuplicates: true });
};

export default seedAllSetTypes;
