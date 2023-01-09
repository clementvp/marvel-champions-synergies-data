import jsonfile from "jsonfile";

const enrichLinkedCards = () => {
  const allCards = jsonfile.readFileSync("./data/ORIGINAL/allCards.json");
  const allCardsWithLinkedCards = allCards.map((card) => {
    if (card.code.length >= 6) {
      const cardsLinked = allCards.filter((normalCard) =>
        normalCard.code.startsWith(card.code.slice(0, -1))
      );
      const linkedCardsCode = [];
      cardsLinked.forEach((item) => {
        linkedCardsCode.push(item.code);
      });
      return {
        ...card,
        linkedTo: linkedCardsCode.filter((item) => item !== card.code),
      };
    }
    return card;
  });
  jsonfile.writeFileSync(
    "./data/ORIGINAL/allCards.json",
    allCardsWithLinkedCards,
    {
      spaces: 2,
    }
  );
};
export { enrichLinkedCards };
