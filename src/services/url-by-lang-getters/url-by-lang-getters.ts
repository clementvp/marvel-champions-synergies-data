const langs = ["KO", "FR", "IT", "ES", "DE", "EN"];

const getPackBaseUrl = (lang) => {
  let url;
  switch (lang) {
    case "FR":
      url = process.env.PACKS_BASE_URL_FR;
      break;
    case "IT":
      url = process.env.PACKS_BASE_URL_IT;
      break;
    case "DE":
      url = process.env.PACKS_BASE_URL_DE;
      break;
    case "ES":
      url = process.env.PACKS_BASE_URL_ES;
      break;
    case "KO":
      url = process.env.PACKS_BASE_URL_KO;
      break;
    default:
      url = process.env.PACKS_BASE_URL;
      break;
  }
  return url;
};

const getAllPacksUrl = () => {
  const packsUrls = [
    { lang: "IT", url: process.env.ALL_PACKS_URL_IT },
    { lang: "FR", url: process.env.ALL_PACKS_URL_FR },
    { lang: "ES", url: process.env.ALL_PACKS_URL_ES },
    { lang: "DE", url: process.env.ALL_PACKS_URL_DE },
    { lang: "KO", url: process.env.ALL_PACKS_URL_KO },
    { lang: "EN", url: process.env.ALL_PACKS_URL },
  ];
  return packsUrls;
};

const getAllCardTypesUrl = (lang) => {
  let url;
  switch (lang) {
    case "FR":
      url = process.env.ALL_CARD_TYPES_URL_FR;
      break;
    case "IT":
      url = process.env.ALL_CARD_TYPES_URL_IT;
      break;
    case "ES":
      url = process.env.ALL_CARD_TYPES_URL_ES;
      break;
    case "DE":
      url = process.env.ALL_CARD_TYPES_URL_DE;
      break;
    case "KO":
      url = process.env.ALL_CARD_TYPES_URL_KO;
      break;

    default:
      url = process.env.ALL_CARD_TYPES_URL;
      break;
  }
  return url;
};

const getAllfactionsUrl = (lang) => {
  let url;
  switch (lang) {
    case "FR":
      url = process.env.ALL_FACTIONS_URL_FR;
      break;
    case "IT":
      url = process.env.ALL_FACTIONS_URL_IT;
      break;
    case "ES":
      url = process.env.ALL_FACTIONS_URL_ES;
      break;
    case "DE":
      url = process.env.ALL_FACTIONS_URL_DE;
      break;
    case "KO":
      url = process.env.ALL_FACTIONS_URL_KO;
      break;
    default:
      url = process.env.ALL_FACTIONS_URL;
      break;
  }
  return url;
};

const getAllPackTypesUrl = (lang) => {
  let url;
  switch (lang) {
    case "FR":
      url = process.env.ALL_PACK_TYPES_URL_FR;
      break;
    case "IT":
      url = process.env.ALL_PACK_TYPES_URL_IT;
      break;
    case "ES":
      url = process.env.ALL_PACK_TYPES_URL_ES;
      break;
    case "DE":
      url = process.env.ALL_PACK_TYPES_URL_DE;
      break;
    case "KO":
      url = process.env.ALL_PACK_TYPES_URL_KO;
      break;
    default:
      url = process.env.ALL_PACK_TYPES_URL;
      break;
  }
  return url;
};

const getAllSetsUrl = (lang) => {
  let url;
  switch (lang) {
    case "FR":
      url = process.env.ALL_SETS_URL_FR;
      break;
    case "IT":
      url = process.env.ALL_SETS_URL_IT;
      break;
    case "ES":
      url = process.env.ALL_SETS_URL_ES;
      break;
    case "DE":
      url = process.env.ALL_SETS_URL_DE;
      break;
    case "KO":
      url = process.env.ALL_SETS_URL_KO;
      break;

    default:
      url = process.env.ALL_SETS_URL;
      break;
  }
  return url;
};

const getAllSetTypesUrl = (lang) => {
  let url;
  switch (lang) {
    case "FR":
      url = process.env.ALL_SET_TYPES_URL_FR;
      break;

    default:
      url = process.env.ALL_SET_TYPES_URL;
      break;
  }
  return url;
};

const getAllSubTypesUrl = (lang) => {
  let url;
  switch (lang) {
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
  langs,
  getPackBaseUrl,
  getAllCardTypesUrl,
  getAllPackTypesUrl,
  getAllPacksUrl,
  getAllSetsUrl,
  getAllSubTypesUrl,
  getAllfactionsUrl,
  getAllSetTypesUrl,
};
