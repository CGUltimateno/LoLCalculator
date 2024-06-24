const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseChampionSchema = new Schema({
  name: { type: String, required: true },
  baseStats: {
    hp: { type: Number, required: true },
    hpRegen: { type: Number, required: true },
    mana: { type: Number, required: true },
    manaRegen: { type: Number, required: true },
    armor: { type: Number, required: true },
    magicResist: { type: Number, required: true },
    attackDamage: { type: Number, required: true },
    attackSpeed: { type: Number, required: true },
    moveSpeed: { type: Number, required: true },
    range: { type: Number, required: true }
  },
  growthStats: {
    hpPerLevel: { type: Number, required: true },
    hpRegenPerLevel: { type: Number, required: true },
    manaPerLevel: { type: Number, required: true },
    manaRegenPerLevel: { type: Number, required: true },
    armorPerLevel: { type: Number, required: true },
    magicResistPerLevel: { type: Number, required: true },
    attackDamagePerLevel: { type: Number, required: true },
    attackSpeedPerLevel: { type: Number, required: true },
    moveSpeedPerLevel: { type: Number, required: true }
  },
  abilities: [{ type: Schema.Types.ObjectId, ref: 'Ability' }],
  passive: { type: Schema.Types.ObjectId, ref: 'Ability' },
  resource: { type: String, required: true },
  resourceRegen: { type: Number, required: true }
});

module.exports = mongoose.model('BaseChampion', baseChampionSchema);
