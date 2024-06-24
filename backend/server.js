const express = require('express');
const bodyParser = require('body-parser');
const Champion = require('./models/Champion');
const cors = require('cors');
const Ability = require('./models/Ability');
const Item = require('./models/Item');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectDB(); 

app.get('/api/champions', async (req, res) => {
    try {
      const champions = await Champion.find().populate('abilities passive');
      res.json(champions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get champion by ID
  app.get('/api/champions/:id', async (req, res) => {
    try {
      const champion = await Champion.findById(req.params.id).populate('abilities passive');
      if (!champion) return res.status(404).json({ message: 'Champion not found' });
      res.json(champion);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Create a new champion
  app.post('/api/champions', async (req, res) => {
    const champion = new Champion(req.body);
    try {
      const newChampion = await champion.save();
      res.status(201).json(newChampion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Get all items
  app.get('/api/items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Create a new item
  app.post('/api/items', async (req, res) => {
    const item = new Item(req.body);
    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  app.get('/api/abilities', async (req, res) => {
    try {
      const abilities = await Ability.find();
      res.json(abilities);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.post('/api/abilities', async (req, res) => {
    const ability = new Ability(req.body);
    try {
      const newAbility = await ability.save();
      res.status(201).json(newAbility);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  // Update a champion's abilities
app.patch('/api/champions/:id/abilities', async (req, res) => {
    try {
      const { abilities, passive } = req.body;
      const champion = await Champion.findById(req.params.id);
  
      if (!champion) {
        return res.status(404).json({ message: 'Champion not found' });
      }
  
      // Update abilities and passive if provided
      if (abilities) champion.abilities = abilities;
      if (passive) champion.passive = passive;
  
      await champion.save();
      res.json(champion);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});