import Downloader from "nodejs-file-downloader";
import {
  getAllPackTypesUrl,
  lang,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllPackTypes = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_PACK_TYPES_URL,
    directory: "./data/pack-types",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationPackTypes = async () => {
  const downloader = new Downloader({
    url: getAllPackTypesUrl(),
    directory: "./data/pack-types",
    fileName: `${lang}_packtypes.json`,
    cloneFiles: false,
  });
  return downloader.download();
};

export { downloadAllPackTypes, downloadAllTranslationPackTypes };
