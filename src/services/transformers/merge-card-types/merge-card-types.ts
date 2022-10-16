import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";
const mergeCardTypes = () => {
  const originalCardTypes = jsonfile.readFileSync("./data/types/types.json");

  const tradCardTypes = jsonfile.readFileSync(
    `./data/types/${lang}_types.json`
  );

  const mergedCardTypes = originalCardTypes.map((cardType) => {
    const type = { ...cardType };
    const tradType = tradCardTypes.find((type) => type.code === cardType.code);
    if (tradType) {
      type.name = tradType.name;
    }
    return type;
  });

  jsonfile.writeFileSync(`./data/types/${lang}_types.json`, mergedCardTypes, {
    spaces: 2,
  });
};

export default mergeCardTypes;
