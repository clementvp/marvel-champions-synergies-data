const createAllLinkedCards = (allCards, db) => {
  const allCardsWithLinks = allCards.filter((card) => card.linkedTo);
  const promArrAllCardsLinks = allCardsWithLinks.map((card) => {
    const cardLinks = card.linkedTo;
    const cardLinksArr = cardLinks.map((link) => {
      db.card.update({
        where: { code: card.code },
        data: { linkedTo: { connect: { code: link } } },
      });
    });
    return cardLinksArr;
  });
  const flatennedLinks = promArrAllCardsLinks.flat();
  return flatennedLinks;
};

export default createAllLinkedCards;
