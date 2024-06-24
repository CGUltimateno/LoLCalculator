const mongoose = require('mongoose');
const BaseAbility = require('./BaseAbility');

const judgmentSchema = new mongoose.Schema({
  spins: { type: Number, required: true }, // Base number of spins
  bonusSpinsPerAttackSpeed: { type: Number, required: true }, // Bonus spins from attack speed
  increasedDamageToNearest: { type: Number, required: true }, // Increased damage to nearest enemy
  armorReduction: {
    percentage: { type: Number, required: true },
    duration: { type: Number, required: true },
  },
  criticalStrikeBonus: { type: Number, required: true }, // Bonus damage for critical strikes
  monsterDamageMultiplier: { type: Number, required: true }, // Damage multiplier against monsters
});

// Inherit from BaseAbility
judgmentSchema.add(BaseAbility.schema);

module.exports = mongoose.model('Judgment', judgmentSchema);