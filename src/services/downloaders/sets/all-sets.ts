import Downloader from "nodejs-file-downloader";
import {
  getAllSetsUrl,
  lang,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllSets = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_SETS_URL,
    directory: "./data/sets",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationSets = async () => {
  const downloader = new Downloader({
    url: getAllSetsUrl(),
    directory: "./data/sets",
    fileName: `${lang}_sets.json`,
    cloneFiles: false,
  });
  return downloader.download();
};

export { downloadAllSets, downloadAllTranslationSets };
