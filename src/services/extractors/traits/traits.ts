import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const extractTraits = () => {
  const allCards = jsonfile.readFileSync(`./data/${lang}_allCards.json`);
  const allTraits = [];

  const cardsWithTraits = allCards.filter((card) => card.traits);

  cardsWithTraits.forEach((card) => {
    const traits = card.traits;
    traits.forEach((trait) => {
      if (!allTraits.includes(trait)) {
        allTraits.push(trait);
      }
    });
  });

  const traits = allTraits.map((trait) => {
    return {
      code: trait.replaceAll(" ", "-").replaceAll("'", "-"),
      name: trait,
    };
  });
  jsonfile.writeFile(`./data/${lang}_allTraits.json`, traits, { spaces: 2 });
};

export { extractTraits };
