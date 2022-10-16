const createAllPacks = (allPacks, db) => {
  const promArrAllPacks = allPacks.map((pack) => {
    const data = {
      code: pack.code,
      name: pack.name,
      type_code: pack.pack_type_code,
      date_release: pack.date_release,
      position: pack.position,
      size: pack.size,
    };

    return db.pack.create({
      data,
    });
  });
  return promArrAllPacks;
};

export default createAllPacks;
