import Downloader from "nodejs-file-downloader";
import {
  getAllCardTypesUrl,
  langs,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllCardTypes = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_CARD_TYPES_URL,
    directory: "./data/ORIGINAL/types",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationCardTypes = async () => {
  for (const lang of langs) {
    const downloader = new Downloader({
      url: getAllCardTypesUrl(lang),
      directory: `./data/${lang}/types`,
      fileName: "types.json",
      cloneFiles: false,
    });
    await downloader.download();
  }
};

export { downloadAllCardTypes, downloadAllTranslationCardTypes };
