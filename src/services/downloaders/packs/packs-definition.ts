import Downloader from "nodejs-file-downloader";
import {
  getAllPacksUrl,
  lang,
} from "../../url-by-lang-getters/url-by-lang-getters";

const packsDefinitionUrl = process.env.ALL_PACKS_URL;

const downloadPacksDefinition = async () => {
  const downloader = new Downloader({
    url: packsDefinitionUrl,
    directory: "./data/packs-definition",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadTranslationPacksDefinition = async () => {
  const downloader = new Downloader({
    url: getAllPacksUrl(),
    directory: "./data/packs-definition",
    fileName: `${lang}_packs.json`,
    cloneFiles: false,
  });
  return downloader.download();
};

export { downloadPacksDefinition, downloadTranslationPacksDefinition };
