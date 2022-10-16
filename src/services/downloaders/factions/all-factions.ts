import Downloader from "nodejs-file-downloader";
import {
  getAllfactionsUrl,
  lang,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllfactions = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_FACTIONS_URL,
    directory: "./data/factions",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationFactions = async () => {
  const downloader = new Downloader({
    url: getAllfactionsUrl(),
    directory: "./data/factions",
    fileName: `${lang}_factions.json`,
    cloneFiles: false,
  });
  return downloader.download();
};

export { downloadAllfactions, downloadAllTranslationFactions };
