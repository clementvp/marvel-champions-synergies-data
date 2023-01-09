import directoryTree from "directory-tree";
import jsonfile from "jsonfile";
import { langs } from "../../url-by-lang-getters/url-by-lang-getters";
const mergeTranslationPacks = () => {
  const originalCards = jsonfile.readFileSync("./data/ORIGINAL/allCards.json");
  const arr = [];

  originalCards.forEach((card) => {
    if (card.duplicate_of) {
      arr.push({ duplicateOf: card.duplicate_of, code: card.code });
    }
  });

  for (const lang of langs) {
    const tree = directoryTree(`./data/${lang}/packs`);
    const files = tree.children;
    const allCards = [];

    files.forEach(({ path }) => {
      const pack = jsonfile.readFileSync(path);
      allCards.push(pack);
    });
    const unprocessedCards = allCards.flat();

    arr.forEach(({ duplicateOf, code }) => {
      const findedCard = unprocessedCards.find((card) => {
        return card.code === duplicateOf;
      });
      if (findedCard) {
        const newCard = { ...findedCard, code };
        unprocessedCards.push(newCard);
      }
    });

    jsonfile.writeFileSync(`./data/${lang}/allCards.json`, unprocessedCards, {
      spaces: 2,
    });
  }
};

export default mergeTranslationPacks;
