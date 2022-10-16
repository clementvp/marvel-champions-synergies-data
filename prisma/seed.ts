import dotenv from "dotenv";
import createAllPackTypes from "../db/create-all-pack-types";
import createAllPacks from "../db/create-all-packs";
import createAllFactions from "../db/create-all-factions";
import createAllSetTypes from "../db/create-all-set-types";
import createAllSets from "../db/create-all-sets";
import createAllTraits from "../db/create-all-traits";
import createAllCards from "../db/create-all-cards";
import createAllTypes from "../db/create-all-types";
import createAllTraitsOnCards from "../db/create-all-traits-on-cards";
import createDuplicatedCards from "../db/create-duplicated-cards";
import createAllLinkedCards from "../db/create-all-linked-cards";

import { PrismaClient } from "@prisma/client";
import jsonfile from "jsonfile";

dotenv.config();

const db = new PrismaClient();
const lang = process?.env?.WANTED_LANG?.toLowerCase() || "EN";

const drop = async () => {
  try {
    await db.pack.deleteMany({});
    await db.packType.deleteMany({});
    await db.faction.deleteMany({});
    await db.set.deleteMany({});
    await db.setType.deleteMany({});
    await db.trait.deleteMany({});
    await db.traitsOnCards.deleteMany({});
    await db.type.deleteMany({});
    await db.card.deleteMany({});
  } catch (error) {
    console.log(error.message);
  }
};

const packTypes = jsonfile.readFileSync(
  `./data/pack-types/${lang}_packtypes.json`
);
const seedAllPackTypes = async () => {
  try {
    await Promise.all(createAllPackTypes(packTypes, db));
    console.log("OK FOR PACK TYPES");
  } catch (error) {
    console.log(error.message);
  }
};

const allPacks = jsonfile.readFileSync(
  `./data/packs-definition/${lang}_packs.json`
);
const seedAllPacks = async () => {
  try {
    await Promise.all(createAllPacks(allPacks, db));
    console.log("OK FOR PACKS");
  } catch (error) {
    console.log(error.message);
  }
};

const allTradFactions = jsonfile.readFileSync(
  `./data/factions/${lang}_factions.json`
);
const seedAllFactions = async () => {
  try {
    await Promise.all(createAllFactions(allTradFactions, db));
    console.log("OK FOR FACTIONS");
  } catch (error) {
    console.log(error.message);
  }
};

const allSetTypes = jsonfile.readFileSync("./data/set-types/settypes.json");
const seedAllSetTypes = async () => {
  try {
    await Promise.all(createAllSetTypes(allSetTypes, db));
    console.log("OK FOR SET TYPES");
  } catch (error) {
    console.log(error.message);
  }
};

const allTradSets = jsonfile.readFileSync(`./data/sets/${lang}_sets.json`);
const seedAllSets = async () => {
  try {
    await Promise.all(createAllSets(allTradSets, db));
    console.log("OK FOR SETS");
  } catch (error) {
    console.log(error.message);
  }
};

const allTraits = jsonfile.readFileSync(`./data/${lang}_allTraits.json`);
const seedAllTraits = async () => {
  await Promise.all(createAllTraits(allTraits, db));
  console.log("OK FOR ALL TRAITS");
};

const allTypes = jsonfile.readFileSync(`./data/types/${lang}_types.json`);

const seedAlltypes = async () => {
  try {
    await Promise.all(createAllTypes(allTypes, db));
    console.log("OK FOR CARD TYPES");
  } catch (error) {
    console.log(error.message);
  }
};

const allCards = jsonfile.readFileSync(`./data/${lang}_allCards.json`);
const seedAllCards = async () => {
  try {
    await Promise.all(createAllCards(allCards, db));
    console.log("OK FOR ALL CARDS");
  } catch (error) {
    console.log(error.message);
  }
};

const seedTraitsOncards = async () => {
  try {
    await Promise.all(createAllTraitsOnCards(allCards, db));
    console.log("OK FOR TRAITS ON CARD");
  } catch (error) {
    console.log(error.message);
  }
};

const seedDuplicatedCards = async () => {
  try {
    await Promise.all(createDuplicatedCards(allCards, db));
    console.log("OK FOR DUPLICATED CARDS");
  } catch (error) {
    console.log(error.message);
  }
};

const seedAllLinkedCards = async () => {
  try {
    await Promise.all(createAllLinkedCards(allCards, db));
    console.log("OK FOR LINKED CARD");
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  await drop();
  await seedAllPackTypes();
  await seedAllPacks();
  await seedAllFactions();
  await seedAllSetTypes();
  await seedAllSets();
  await seedAllTraits();
  await seedAlltypes();
  await seedAllCards();
  await seedTraitsOncards();
  await seedDuplicatedCards();
  await seedAllLinkedCards();
};

init();
