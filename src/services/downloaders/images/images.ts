import Downloader from "nodejs-file-downloader";
import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const downloadAllcardImages = async () => {
  const allcardsFile = `./data/${lang}_allCards.json`;
  const allCards = jsonfile.readFileSync(allcardsFile);

  const urls = allCards.map((card) => {
    return `${process.env.CARDS_IMAGES_BASE_URL}${card.code}.jpg`;
  });

  const downloadError = [];

  for (const url of urls) {
    const downloader = new Downloader({
      url: url,
      directory: "./data/images",
      cloneFiles: false,
    });

    try {
      await downloader.download();
    } catch (error) {
      downloadError.push(url);
    }
  }

  jsonfile.writeFileSync("./data/images-download-error.json", downloadError, {
    spaces: 2,
  });
};

export { downloadAllcardImages };
