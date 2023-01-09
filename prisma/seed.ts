import { PrismaClient } from "@prisma/client";

import createLang from "../src/db/seed-lang";
import seedAllPackTypes from "../src/db/seed-all-pack-types";
import seedAllPacks from "../src/db/seed-all-packs";
import seedAllFactions from "../src/db/seed-all-factions";
import seedAllTypes from "../src/db/seed-all-types";
import seedAllSetTypes from "../src/db/seed-all-set-types";
import seedAllSets from "../src/db/seed-all-sets";
import seedAllTraits from "../src/db/seed-all-traits";
import seedAllCards from "../src/db/seed-all-cards";

const db = new PrismaClient();

const init = async () => {
  await createLang(db);
  await seedAllPackTypes(db);
  await seedAllPacks(db);
  await seedAllFactions(db);
  await seedAllTypes(db);
  await seedAllSetTypes(db);
  await seedAllSets(db);
  await seedAllTraits(db);
  await seedAllCards(db);
  /*
  await seedTraitsOncards();
  await seedDuplicatedCards();
  await seedAllLinkedCards();
  */
};

init();
