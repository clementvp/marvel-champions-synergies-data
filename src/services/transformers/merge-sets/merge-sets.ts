import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";
const mergeSets = () => {
  const originalSets = jsonfile.readFileSync("./data/sets/sets.json");
  const tradSets = jsonfile.readFileSync(`./data/sets/${lang}_sets.json`);

  const mergedSets = originalSets.map((originalSet) => {
    const set = {
      ...originalSet,
    };
    const tradSet = tradSets.find(
      (tradSet) => tradSet.code === originalSet.code
    );
    if (tradSet) {
      set.name = tradSet.name;
    }
    return set;
  });

  jsonfile.writeFile(`./data/sets/${lang}_sets.json`, mergedSets, {
    spaces: 2,
  });
};

export default mergeSets;
