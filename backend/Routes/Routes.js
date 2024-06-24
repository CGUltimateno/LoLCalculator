const express = require('express');
const championRoutes = require('./Routers/championRoutes');
// Import other route files here as needed

const router = express.Router();

router.use('/api/champions', championRoutes);
// Use other routes here as needed

module.exports = router;