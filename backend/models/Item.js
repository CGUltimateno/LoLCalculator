const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  stats: {
    ad: { type: Number }, // Attack Damage
    ap: { type: Number }, // Ability Power
    abilityHaste: { type: Number }, // Cooldown Reduction
    movementSpeed: { type: Number }, // Movement Speed
    // Add other stats as needed
  },
  passive: { type: String } // Unique passive effects
});

module.exports = mongoose.model('Item', itemSchema);
