import Downloader from "nodejs-file-downloader";
import {
  getAllfactionsUrl,
  langs,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllfactions = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_FACTIONS_URL,
    directory: "./data/ORIGINAL/factions",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationFactions = async () => {
  for (const lang of langs) {
    const downloader = new Downloader({
      url: getAllfactionsUrl(lang),
      directory: `./data/${lang}/factions`,
      fileName: "factions.json",
      cloneFiles: false,
    });
    await downloader.download();
  }
};

export { downloadAllfactions, downloadAllTranslationFactions };
