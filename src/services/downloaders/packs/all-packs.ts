import Downloader from "nodejs-file-downloader";
import jsonfile from "jsonfile";
import {
  getPackBaseUrl,
  langs,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllPacks = async () => {
  const allPacksData = jsonfile.readFileSync(
    "./data/ORIGINAL/packs-definition/packs.json"
  );
  const promArrDownloadAllPacks = allPacksData.map((pack) => {
    const downloader = new Downloader({
      url: `${process.env.PACKS_BASE_URL}${pack.code}.json`,
      directory: "./data/ORIGINAL/packs",
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

const downloadAllTranslationPacks = async () => {
  const allPacksData = jsonfile.readFileSync(
    "./data/ORIGINAL/packs-definition/packs.json"
  );
  const individualPacksdata = [];

  for (const lang of langs) {
    for (const pack of allPacksData) {
      const url = `${getPackBaseUrl(lang)}${pack.code}.json`;
      individualPacksdata.push({ url, code: pack.code, lang });
    }
  }

  const promArrDownloadAllPacks = individualPacksdata.map((data) => {
    const downloader = new Downloader({
      url: data.url,
      directory: `./data/${data.lang}/packs`,
      fileName: `${data.code}.json`,
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

const downloadAllEncounterPacks = async () => {
  const allPacksData = jsonfile.readFileSync(
    "./data/ORIGINAL/packs-definition/packs.json"
  );
  const promArrDownloadAllPacks = allPacksData.map((pack) => {
    const downloader = new Downloader({
      url: `${process.env.PACKS_BASE_URL}${pack.code}_encounter.json`,
      directory: "./data/ORIGINAL/packs",
      cloneFiles: false,
    });
    return downloader.download();
  });
  return Promise.all(promArrDownloadAllPacks);
};

const downloadAllTranslationEncounterPacks = async () => {
  const allPacksData = jsonfile.readFileSync(
    "./data/ORIGINAL/packs-definition/packs.json"
  );
  const individualPacksdata = [];

  for (const lang of langs) {
    for (const pack of allPacksData) {
      const url = `${getPackBaseUrl(lang)}${pack.code}_encounter.json`;
      individualPacksdata.push({ url, code: pack.code, lang });
    }
  }

  const promArrDownloadAllPacks = individualPacksdata.map((data) => {
    const downloader = new Downloader({
      url: data.url,
      directory: `./data/${data.lang}/packs`,
      fileName: `${data.code}_encounter.json`,
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
