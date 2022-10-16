const createAllFactions = (allTradFactions, db) => {
  const prommArrTradFactions = allTradFactions.map((faction) => {
    const data = { code: faction.code, name: faction.name };
    return db.faction.create({
      data,
    });
  });
  return prommArrTradFactions;
};

export default createAllFactions;
