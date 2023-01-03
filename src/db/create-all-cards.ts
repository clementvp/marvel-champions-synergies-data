import dotenv from "dotenv";
dotenv.config();
import { v5 as uuidv5 } from "uuid";
const outputLegalCost = (cost) => {
  if (cost === 0) {
    return "0";
  }
  return cost ? cost.toString() : null;
};

const outputLegal = (item) => {
  if (item) {
    if (typeof item !== "number") {
      return Math.floor(parseInt(item));
    }
    return item;
  }
  return null;
};

const createAllCards = (allCards, db) => {
  const promArrAllCards = allCards.map((card) => {
    const data = {
      code: card.code,
      name: card.name,
      imageId: uuidv5(card.code, process.env.UUID_NAMESPACE),
      back_link: card.back_link,
      type_code: card.type_code,
      pack_code: card.pack_code,
      set_code: card.set_code,
      quantity: card.quantity,
      faction_code: card.faction_code,
      deck_limit: card.deck_limit,
      defense: card.defense,
      flavor: card.flavor,
      hand_size: outputLegal(card.hand_size),
      health: card.health,
      illustrator: card.illustrator,
      is_unique: card.is_unique,
      position: card.position,
      text: card.text,
      thwart: card.thwart,
      hidden: card.hidden,
      recover: card.recover,
      attack_cost: card.attack_cost,
      cost: outputLegalCost(card.cost),
      resource_wild: card.resource_wild,
      set_position: card.set_position,
      subname: card.subname,
      thwart_cost: card.thwart_cost,
      resource_energy: card.resource_energy,
      resource_physical: outputLegal(card.resource_physical),
      resource_mental: outputLegal(card.resource_mental),
      boost: card.boost,
      base_threat: card.base_threat,
      attack_text: card.attack_text,
      boost_text: card.boost_text,
      scheme_text: card.scheme_text,
      scheme_acceleration: card.scheme_acceleration,
      health_per_hero: card.health_per_hero,
      stage: outputLegal(card.stage),
      back_flavor: card.back_flavor,
      back_text: card.back_text,
      double_sided: card.double_sided,
      escalation_threat: card.escalation_threat,
      scheme_crisis: card.scheme_crisis,
      threat: card.threat,
      scheme_hazard: outputLegal(card.scheme_hazard),
      scheme_boost: outputLegal(card.scheme_boost),
      scheme_amplify: card.scheme_amplify,
      escalation_threat_fixed: card.escalation_threat_fixed,
      back_name: card.back_name,
      permanent: card.permanent,
      thwart_text: card.thwart_text,
      back_traits: card.back_traits,
      spoiler: card.spoiler,
      threat_fixed: card.threat_fixed,
    };
    return db.card.create({
      data,
    });
  });
  return promArrAllCards;
};

export default createAllCards;
