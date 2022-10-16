const createAllTraits = (allTraits, db) => {
  const promArrAllTraits = allTraits.map((trait) => {
    const data = { code: trait.code, name: trait.name };
    return db.trait.create({
      data,
    });
  });
  return promArrAllTraits;
};

export default createAllTraits;
