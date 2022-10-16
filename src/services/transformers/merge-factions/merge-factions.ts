import jsonfile from "jsonfile";
import { lang } from "../../url-by-lang-getters/url-by-lang-getters";

const mergeFactions = () => {
  const originalFactions = jsonfile.readFileSync(
    "./data/factions/factions.json"
  );

  const tradFactions = jsonfile.readFileSync(
    `./data/factions/${lang}_factions.json`
  );

  const mergedFactions = originalFactions.map((originalFaction) => {
    const faction = { ...originalFaction };
    const tradFaction = tradFactions.find(
      (faction) => faction.code === originalFaction.code
    );
    if (tradFaction) {
      faction.name = tradFaction.name;
    }
    return faction;
  });

  jsonfile.writeFileSync(
    `./data/factions/${lang}_factions.json`,
    mergedFactions,
    { spaces: 2 }
  );
};

export default mergeFactions;
