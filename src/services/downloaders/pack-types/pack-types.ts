import Downloader from "nodejs-file-downloader";
import {
  getAllPackTypesUrl,
  langs,
} from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllPackTypes = async () => {
  const downloader = new Downloader({
    url: process.env.ALL_PACK_TYPES_URL,
    directory: "./data/ORIGINAL/pack-types",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadAllTranslationPackTypes = async () => {
  for (const lang of langs) {
    const downloader = new Downloader({
      url: getAllPackTypesUrl(lang),
      directory: `./data/${lang}/pack-types`,
      fileName: "packtypes.json",
      cloneFiles: false,
    });
    await downloader.download();
  }
};

export { downloadAllPackTypes, downloadAllTranslationPackTypes };
