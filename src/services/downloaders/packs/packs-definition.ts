import Downloader from "nodejs-file-downloader";
import { getAllPacksUrl } from "../../url-by-lang-getters/url-by-lang-getters";

const packsDefinitionUrl = process.env.ALL_PACKS_URL;

const downloadPacksDefinition = async () => {
  const downloader = new Downloader({
    url: packsDefinitionUrl,
    directory: "./data/ORIGINAL/packs-definition",
    fileName: "packs.json",
    cloneFiles: false,
  });
  return downloader.download();
};

const downloadTranslatedPacksDefinition = async () => {
  const objUrls = getAllPacksUrl();
  for (const obj of objUrls) {
    const downloader = new Downloader({
      url: obj.url,
      directory: `./data/${obj.lang}/packs-definition`,
      fileName: "packs.json",
      cloneFiles: false,
    });
    await downloader.download();
  }
};

export { downloadPacksDefinition, downloadTranslatedPacksDefinition };
