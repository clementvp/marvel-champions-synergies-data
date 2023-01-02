const createAllTypes = (allTypes, db) => {
  const promArrAllTypes = allTypes.map((type) => {
    const data = { code: type.code, name: type.name };
    return db.type.create({
      data,
    });
  });
  return promArrAllTypes;
};

export default createAllTypes;
