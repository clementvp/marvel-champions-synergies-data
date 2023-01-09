import directoryTree from "directory-tree";
import jsonfile from "jsonfile";

const mergeOriginalPacks = () => {
  const tree = directoryTree("./data/ORIGINAL/packs");
  const files = tree.children;

  const allOriginalCards = [];

  files.forEach(({ path }) => {
    const pack = jsonfile.readFileSync(path);
    allOriginalCards.push(pack);
  });
  const unprocessedCards = allOriginalCards.flat();

  const allCards = unprocessedCards.map((card) => {
    let newCard = { ...card };
    if (card.duplicate_of) {
      const dupliquee = unprocessedCards.find(
        (element) => element.code === card.duplicate_of
      );
      newCard = { ...dupliquee, ...card };
    }
    return newCard;
  });

  jsonfile.writeFileSync("./data/ORIGINAL/allCards.json", allCards, {
    spaces: 2,
  });
  console.log(allCards.length, "ORIGINAL CARDS");
};

export default mergeOriginalPacks;
