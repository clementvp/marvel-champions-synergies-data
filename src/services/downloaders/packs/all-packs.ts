import Downloader from "nodejs-file-downloader";
import jsonfile from "jsonfile";
import {
  getPackBaseUrl,
  lang,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllPacks = async () => {
  const allPacksDefinitionFile = "./data/packs-definition/packs.json";
  const allPacksData = jsonfile.readFileSync(allPacksDefinitionFile);

  const promArrDownloadAllPacks = allPacksData.map((pack) => {
    const downloader = new Downloader({
      url: `${process.env.PACKS_BASE_URL}${pack.code}.json`,
      directory: "./data/packs",
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

const downloadAllTranslationPacks = async () => {
  const allPacksDefinitionFile = `./data/packs-definition/${lang}_packs.json`;
  const allPacksData = jsonfile.readFileSync(allPacksDefinitionFile);

  const promArrDownloadAllPacks = allPacksData.map((pack) => {
    const url = getPackBaseUrl();
    const downloader = new Downloader({
      url: `${url}${pack.code}.json`,
      directory: "./data/packs",
      fileName: `${lang}_${pack.code}.json`,
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

const downloadAllEncounterPacks = async () => {
  const allPacksDefinitionFile = "./data/packs-definition/packs.json";
  const allPacksData = jsonfile.readFileSync(allPacksDefinitionFile);

  const promArrDownloadAllPacks = allPacksData.map((pack) => {
    const downloader = new Downloader({
      url: `${process.env.PACKS_BASE_URL}${pack.code}_encounter.json`,
      directory: "./data/packs",
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

const downloadAllTranslationEncounterPacks = async () => {
  const allPacksDefinitionFile = `./data/packs-definition/${lang}_packs.json`;
  const allPacksData = jsonfile.readFileSync(allPacksDefinitionFile);

  const promArrDownloadAllPacks = allPacksData.map((pack) => {
    const url = getPackBaseUrl();

    const downloader = new Downloader({
      url: `${url}${pack.code}_encounter.json`,
      directory: "./data/packs",
      fileName: `${lang}_${pack.code}_encounter.json`,
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

export {
  downloadAllPacks,
  downloadAllTranslationPacks,
  downloadAllEncounterPacks,
  downloadAllTranslationEncounterPacks,
};
