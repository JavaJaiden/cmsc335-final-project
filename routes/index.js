const express = require('express');
const router = express.Router();
const axios = require('axios');
const Fact = require('../models/Fact');

router.get('/', async (req, res) => {
  let randomFact = 'Could not fetch a cat fact right now.';
  let savedFacts = [];

  // Requirement: API that provides some data
  try {
    const apiResponse = await axios.get('https://catfact.ninja/fact');
    randomFact = apiResponse.data.fact;
  } catch (err) {
    console.error('Error fetching cat fact from API:', err.message);
  }

  // Requirement: Retrieve data from MongoDB
  try {
    savedFacts = await Fact.find().sort({ createdAt: -1 });
  } catch (err) {
    console.error('Error fetching facts from MongoDB:', err.message);
  }

  res.render('index', { 
    randomFact, 
    savedFacts 
  });
});

module.exports = router;

