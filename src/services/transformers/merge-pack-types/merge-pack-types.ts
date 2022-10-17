import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const mergePackTypes = () => {
  const originalPackTypes = jsonfile.readFileSync(
    "./data/pack-types/packtypes.json"
  );

  const tradPackTypes = jsonfile.readFileSync(
    `./data/pack-types/${lang}_packtypes.json`
  );

  const mergedTypes = originalPackTypes.map((originalType) => {
    const type = { ...originalType };
    const tradPackType = tradPackTypes.find(
      (type) => type.code === originalType.code
    );
    if (tradPackType) {
      type.name = tradPackType.name;
    }
    return type;
  });

  jsonfile.writeFileSync(
    `./data/pack-types/${lang}_packtypes.json`,
    mergedTypes,
    {
      spaces: 2,
    }
  );
};

export default mergePackTypes;
