const createAllPackTypes = (packTypes, db) => {
  const promArrAllPackTypes = packTypes.map((type) => {
    const data = {
      code: type.code,
      name: type.name,
    };
    return db.packType.create({ data });
  });
  return promArrAllPackTypes;
};

export default createAllPackTypes;
