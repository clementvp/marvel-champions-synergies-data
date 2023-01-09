import jsonfile from "jsonfile";

const extractTraits = () => {
  const allCards = jsonfile.readFileSync("./data/ORIGINAL/allCards.json");
  const allTraits = [];

  const cardsWithTraits = allCards.filter((card) => card.traits);

  cardsWithTraits.forEach((card) => {
    const traits = card.extractedTraits;
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
  jsonfile.writeFile("./data/ORIGINAL/allTraits.json", traits, { spaces: 2 });
};

export { extractTraits };
