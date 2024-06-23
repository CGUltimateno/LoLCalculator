const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectDB(); 

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the League of Legends Stats Calculator API');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});