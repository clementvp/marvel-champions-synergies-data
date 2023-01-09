import { exit } from "process";
import {
  downloadAllCardTypes,
  downloadAllTranslationCardTypes,
} from "./services/downloaders/card-types/card-types";
import {
  downloadAllfactions,
  downloadAllTranslationFactions,
} from "./services/downloaders/factions/all-factions";
import { downloadAllcardImages } from "./services/downloaders/images/images";
import {
  downloadAllPackTypes,
  downloadAllTranslationPackTypes,
} from "./services/downloaders/pack-types/pack-types";
import {
  downloadAllEncounterPacks,
  downloadAllPacks,
  downloadAllTranslationEncounterPacks,
  downloadAllTranslationPacks,
} from "./services/downloaders/packs/all-packs";
import {
  downloadPacksDefinition,
  downloadTranslatedPacksDefinition,
} from "./services/downloaders/packs/packs-definition";
import { downloadAllSetTypes } from "./services/downloaders/set-types/set-types";
import {
  downloadAllSets,
  downloadAllTranslationSets,
} from "./services/downloaders/sets/all-sets";

import { extractTraits } from "./services/extractors/traits/traits";
import { enrichLinkedCards } from "./services/transformers/enrich-linked-cards/enrich-linked-cards";
import mergeOriginalPacks from "./services/transformers/merge-packs/merge-packs";
import mergeTranslationPacks from "./services/transformers/merge-packs/merge-translation-pack";
import { transformShieldTrait } from "./services/transformers/shield-trait/shield-trait";
import { splitCardTraits } from "./services/transformers/split-traits/split-traits";

const init = async () => {
  try {
    await downloadPacksDefinition();
    await downloadTranslatedPacksDefinition();
  } catch (error) {
    console.log("Impossible to download pack definitions");
    exit();
  }

  try {
    await downloadAllPacks();
  } catch (error) {
    console.log("Impossible to download a pack, this is possibly normal");
  }

  try {
    await downloadAllTranslationPacks();
  } catch (error) {
    console.log(
      "Impossible to download a translated pack, this is possibly normal"
    );
  }

  try {
    await downloadAllEncounterPacks();
  } catch (error) {
    console.log(
      "Impossible to download a encounter pack, this is possibly normal"
    );
  }

  try {
    await downloadAllTranslationEncounterPacks();
  } catch (error) {
    console.log(
      "Impossible to download a translated encounter pack, this is possibly normal"
    );
  }

  try {
    await downloadAllfactions();
  } catch (error) {
    console.log("Impossible to download  all factions");
    exit();
  }

  try {
    await downloadAllTranslationFactions();
  } catch (error) {
    console.log("Impossible to download  all translated factions");
    exit();
  }

  try {
    await downloadAllCardTypes();
  } catch (error) {
    console.log("Impossible to download  all card types");
    exit();
  }

  try {
    await downloadAllTranslationCardTypes();
  } catch (error) {
    console.log("Impossible to download  all translated card types");
    exit();
  }

  try {
    await downloadAllPackTypes();
  } catch (error) {
    console.log("Impossible to download all pack types");
    exit();
  }

  try {
    await downloadAllTranslationPackTypes();
  } catch (error) {
    console.log("Impossible to download all translated pack types");
    exit();
  }

  try {
    await downloadAllSets();
  } catch (error) {
    console.log("Impossible to download all sets");
    exit();
  }

  try {
    await downloadAllTranslationSets();
  } catch (error) {
    console.log("Impossible to download all translated sets");
    exit();
  }

  try {
    await downloadAllSetTypes();
  } catch (error) {
    console.log("Impossible to download all set types");
    exit();
  }

  mergeOriginalPacks();

  enrichLinkedCards();

  transformShieldTrait();

  splitCardTraits();

  extractTraits();

  mergeTranslationPacks();

  /*
  try {
    console.log("DOWNLOAD IMAGES THIS MAY TAKE A WHIIIIIIIILE");
    await downloadAllcardImages();
    console.log("DOWNLOAD IMAGES FINISH");
  } catch (error) {
    console.log(error);
  }
  */
};
init();
