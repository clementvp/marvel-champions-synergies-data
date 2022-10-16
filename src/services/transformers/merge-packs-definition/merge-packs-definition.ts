import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const mergePacksDefinitions = () => {
  const originalPacksDefinition = jsonfile.readFileSync(
    "./data/packs-definition/packs.json"
  );

  const tradPacksDefinition = jsonfile.readFileSync(
    `./data/packs-definition/${lang}_packs.json`
  );

  const mergedPacksDefinition = originalPacksDefinition.map((originalPack) => {
    const pack = { ...originalPack };
    const tradPack = tradPacksDefinition.find(
      (pack) => pack.code === originalPack.code
    );
    if (tradPack) {
      pack.name = tradPack.name;
    }
    return pack;
  });

  jsonfile.writeFileSync(
    `./data/packs-definition/${lang}_packs.json`,
    mergedPacksDefinition,
    { spaces: 2 }
  );
};

export default mergePacksDefinitions;
