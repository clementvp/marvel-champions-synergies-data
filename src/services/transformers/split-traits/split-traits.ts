import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const splitCardTraits = () => {
  const allCards = jsonfile.readFileSync(`./data/${lang}_allCards.json`);
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
      const processedCard = { ...card, traits: lowercaseTraits };
      return processedCard;
    } else {
      return { ...card };
    }
  });
  jsonfile.writeFileSync(`./data/${lang}_allCards.json`, processedCards, {
    spaces: 2,
  });
};

export { splitCardTraits };
