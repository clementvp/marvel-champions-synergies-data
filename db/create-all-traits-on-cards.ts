const createAllTraitsOnCards = (allCards, db) => {
  const allCardsWithTraits = allCards.filter((card) => card.traits);

  const promArrTraitsOncard = allCardsWithTraits.map((card) => {
    const arr = [];
    card.traits.map((trait) => {
      const data = {
        trait_code: trait.replaceAll(" ", "-").replaceAll("'", "-"),
        card_code: card.code,
      };
      const transac = db.traitsOnCards.create({
        data,
      });
      arr.push(transac);
    });
    return arr;
  });
  const flatennedTraits = promArrTraitsOncard.flat();
  return flatennedTraits;
};

export default createAllTraitsOnCards;
