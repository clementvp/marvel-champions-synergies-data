import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const transformShieldTrait = () => {
  const allCards = jsonfile.readFileSync(`./data/${lang}_allCards.json`);
  const allCardsWithShieldTraitsConverted = allCards.map((card) => {
    if (card.traits) {
      const newTrait = card.traits.replace("S.H.I.E.L.D", "SHIELD");
      card = { ...card, traits: newTrait };
    }
    return card;
  });
  jsonfile.writeFileSync(
    `./data/${lang}_allCards.json`,
    allCardsWithShieldTraitsConverted,
    { spaces: 2 }
  );
};
export { transformShieldTrait };
