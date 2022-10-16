const createDuplicatedCards = (allCards, db) => {
  const allCardsWithDuplicatedOf = allCards.filter((card) => card.duplicate_of);

  const promArrDuplicatedCards = allCardsWithDuplicatedOf.map((card) => {
    return db.card.update({
      where: { code: card.code },
      data: { duplicatedOfId: card.duplicate_of },
    });
  });

  return promArrDuplicatedCards;
};

export default createDuplicatedCards;
