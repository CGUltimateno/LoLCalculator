const mongoose = require('mongoose');
const BaseChampion = require('./BaseChampion');

const garenSchema = new mongoose.Schema({
  // Add any Garen-specific fields here
  // Example: demacianJusticeCooldown: { type: Number }
});

// Inherit from BaseChampion
garenSchema.add(BaseChampion.schema);

module.exports = mongoose.model('Garen', garenSchema);