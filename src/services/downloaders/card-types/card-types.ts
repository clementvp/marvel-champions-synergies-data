import Downloader from "nodejs-file-downloader";
import {
  getAllCardTypesUrl,
  lang,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllCardTypes = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_CARD_TYPES_URL,
    directory: "./data/types",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationCardTypes = async () => {
  const downloader = new Downloader({
    url: getAllCardTypesUrl(),
    directory: "./data/types",
    fileName: `${lang}_types.json`,
    cloneFiles: false,
  });
  return downloader.download();
};

export { downloadAllCardTypes, downloadAllTranslationCardTypes };
