import jsonfile from "jsonfile";

const transformShieldTrait = () => {
  const allCards = jsonfile.readFileSync("./data/ORIGINAL/allCards.json");
  const allCardsWithShieldTraitsConverted = allCards.map((card) => {
    if (card.traits) {
      const newTrait = card.traits.replace("S.H.I.E.L.D", "SHIELD");
      card = { ...card, traits: newTrait };
    }
    return card;
  });
  jsonfile.writeFileSync(
    "./data/ORIGINAL/allCards.json",
    allCardsWithShieldTraitsConverted,
    { spaces: 2 }
  );
};
export { transformShieldTrait };
