const wantedLang = process.env.WANTED_LANG || "EN";
const lang = wantedLang.toLowerCase();

const getPackBaseUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.PACKS_BASE_URL_FR;
      break;

    default:
      url = process.env.PACKS_BASE_URL;
      break;
  }
  return url;
};

const getAllPacksUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_PACKS_URL_FR;
      break;

    default:
      url = process.env.ALL_PACKS_URL;
      break;
  }
  return url;
};

const getAllCardTypesUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_CARD_TYPES_URL_FR;
      break;

    default:
      url = process.env.ALL_CARD_TYPES_URL;
      break;
  }
  return url;
};

const getAllfactionsUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_FACTIONS_URL_FR;
      break;

    default:
      url = process.env.ALL_FACTIONS_URL;
      break;
  }
  return url;
};

const getAllPackTypesUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_PACK_TYPES_URL_FR;
      break;

    default:
      url = process.env.ALL_PACK_TYPES_URL;
      break;
  }
  return url;
};

const getAllSetsUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_SETS_URL_FR;
      break;

    default:
      url = process.env.ALL_SETS_URL;
      break;
  }
  return url;
};

const getAllSetTypesUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_SET_TYPES_URL_FR;
      break;

    default:
      url = process.env.ALL_SET_TYPES_URL;
      break;
  }
  return url;
};

const getAllSubTypesUrl = () => {
  let url;
  switch (wantedLang) {
    case "FR":
      url = process.env.ALL_SUBTYPES_URL_FR;
      break;

    default:
      url = process.env.ALL_SUBTYPES_URL;
      break;
  }
  return url;
};

export {
  getPackBaseUrl,
  getAllCardTypesUrl,
  getAllPackTypesUrl,
  getAllPacksUrl,
  getAllSetsUrl,
  getAllSubTypesUrl,
  getAllfactionsUrl,
  getAllSetTypesUrl,
  lang,
};
