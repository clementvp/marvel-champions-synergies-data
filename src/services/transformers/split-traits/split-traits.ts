import jsonfile from "jsonfile";

const splitCardTraits = () => {
  const allCards = jsonfile.readFileSync("./data/ORIGINAL/allCards.json");
  const processedCards = allCards.map((card) => {
    if (card.traits) {
      const realTraits = card.traits.replaceAll(".", "---");
      const splitedRealTraits = realTraits.split("---");

      const trimmedRealTraits = splitedRealTraits.map((trait) => {
        return trait.trim();
      });
      const result = trimmedRealTraits.filter((trait) => {
        return trait !== "";
      });
      const lowercaseTraits = result.map((trait) => {
        return trait.toLowerCase();
      });
      const processedCard = { ...card, extractedTraits: lowercaseTraits };
      return processedCard;
    } else {
      return { ...card };
    }
  });
  jsonfile.writeFileSync("./data/ORIGINAL/allCards.json", processedCards, {
    spaces: 2,
  });
};

export { splitCardTraits };
