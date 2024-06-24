const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abilitySchema = new Schema({
  name: { type: String, required: true },
  champion: { type: Schema.Types.ObjectId, ref: 'BaseChampion', required: true },
  description: { type: String },
  type: { type: String, required: true }, // e.g., "damage", "healing", "shield", "cc"
  baseDamage: [{ type: Number }], // Array for damage at different levels
  scaling: {
    adRatio: { type: Number }, // AD ratio scaling
    apRatio: { type: Number }, // AP ratio scaling
    // Add other scaling factors as needed
  },
  damageType: { type: String }, // e.g., "physical", "magical", "true"
  baseHeal: [{ type: Number }], // Array for healing at different levels
  healScaling: {
    apRatio: { type: Number }, // AP ratio scaling for healing
    adRatio: { type: Number }, // AD ratio scaling for healing
  },
  baseShield: [{ type: Number }], // Array for shielding at different levels
  shieldScaling: {
    apRatio: { type: Number }, // AP ratio scaling for shielding
    adRatio: { type: Number }, // AD ratio scaling for shielding
  },
  ccType: { type: String }, // e.g., "stun", "slow", "knockup"
  duration: [{ type: Number }], // Array for duration of CC at different levels
  cooldown: [{ type: Number, required: true }], // Array for cooldown at different levels
  cost: [{ type: Number, required: true }], // Array for mana/energy cost at different levels
  range: { type: Number }, // Cast range
  areaOfEffect: { type: Number } // Radius of AoE effects
});

module.exports = mongoose.model('Ability', abilitySchema);
