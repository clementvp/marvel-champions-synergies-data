import directoryTree from "directory-tree";
import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const mergePacks = () => {
  const tree = directoryTree("./data/packs");
  const files = tree.children;

  const tradFiles = files.filter(({ name }) => name.startsWith(lang));
  const originalFiles = files.filter(({ name }) => !name.startsWith(lang));

  let allTradCards = [];
  let allOriginalCards = [];

  tradFiles.forEach(({ path }) => {
    const tradPack = jsonfile.readFileSync(path);
    allTradCards.push(tradPack);
  });

  originalFiles.forEach(({ path }) => {
    const pack = jsonfile.readFileSync(path);
    allOriginalCards.push(pack);
  });

  allTradCards = allTradCards.flat();
  allOriginalCards = allOriginalCards.flat();

  const unProcessedCards = allOriginalCards.map((originalCard) => {
    const tradCard = allTradCards.find(
      (card) => card.code === originalCard.code
    );
    if (tradCard) {
      return { ...originalCard, ...tradCard };
    }
    return originalCard;
  });

  const allCards = unProcessedCards.map((card) => {
    const newCard = { ...card };
    if (card.duplicate_of) {
      const dupliquee = allTradCards.find(
        (element) => element.code === card.duplicate_of
      );
      const dupliqueeOriginal = allOriginalCards.find(
        (element) => element.code === card.duplicate_of
      );
      if (dupliqueeOriginal.cost) {
        newCard.cost = dupliqueeOriginal.cost;
      }
      newCard.name = dupliquee.name;
      newCard.text = dupliquee.text;
      newCard.flavor = dupliquee.flavor;
      newCard.traits = dupliquee.traits;
      newCard.type_code = dupliqueeOriginal.type_code;
      newCard.faction_code = dupliqueeOriginal.faction_code;
    }
    return newCard;
  });

  jsonfile.writeFileSync(`./data/${lang}_allCards.json`, allCards, {
    spaces: 2,
  });
  console.log(allCards.length, "CARDS");
};

export { mergePacks };
