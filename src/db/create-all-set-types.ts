const createAllSetTypes = (allSetTypes, db) => {
  const promArrAllSetTypes = allSetTypes.map((type) => {
    const data = {
      code: type.code,
      name: type.name,
    };
    return db.setType.create({
      data,
    });
  });
  return promArrAllSetTypes;
};

export default createAllSetTypes;
