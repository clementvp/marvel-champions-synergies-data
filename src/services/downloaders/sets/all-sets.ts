import Downloader from "nodejs-file-downloader";
import {
  getAllSetsUrl,
  langs,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllSets = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_SETS_URL,
    directory: "./data/ORIGINAL/sets",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationSets = async () => {
  for (const lang of langs) {
    const downloader = new Downloader({
      url: getAllSetsUrl(lang),
      directory: `./data/${lang}/sets`,
      fileName: "sets.json",
      cloneFiles: false,
    });
    await downloader.download();
  }
};

export { downloadAllSets, downloadAllTranslationSets };
