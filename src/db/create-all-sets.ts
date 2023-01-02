const createAllSets = (allSets, db) => {
  const promArrAllSets = allSets.map((set) => {
    const data = {
      code: set.code,
      name: set.name,
      type_code: set.card_set_type_code,
    };

    return db.set.create({
      data,
    });
  });
  return promArrAllSets;
};

export default createAllSets;
