const express = require('express');
const Garen = require('./Garen');
const Judgment = require('./GarenE');
const router = express.Router();

// CRUD for Garen's Champion Information
router.post('/garen', async (req, res) => {
    
});

router.get('/garen', async (req, res) => {
  // Read Garen's champion information
});

router.put('/garen/:id', async (req, res) => {
  // Update Garen's champion information
});

router.delete('/garen/:id', async (req, res) => {
  // Delete Garen's champion information
});

// CRUD for Garen's Ability (Judgment)
router.post('/garen/abilities', async (req, res) => {
  // Create Garen's ability
});

router.get('/garen/abilities/:id', async (req, res) => {
  // Read Garen's ability details
});

router.put('/garen/abilities/:id', async (req, res) => {
  // Update Garen's ability details
});

router.delete('/garen/abilities/:id', async (req, res) => {
  // Delete Garen's ability
});

module.exports = router;