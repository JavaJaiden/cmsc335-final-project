const express = require('express');
const router = express.Router();
const axios = require('axios');
const Fact = require('../models/Fact');

router.get('/', async (req, res) => {
  try {
    // Requirement: API that provides some data
    const apiResponse = await axios.get('https://catfact.ninja/fact');
    const randomFact = apiResponse.data.fact;

    // Requirement: Retrieve data from MongoDB
    const savedFacts = await Fact.find().sort({ createdAt: -1 });

    res.render('index', { 
      randomFact, 
      savedFacts 
    });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.render('index', { 
      randomFact: 'Could not fetch a cat fact right now.', 
      savedFacts: [] 
    });
  }
});

module.exports = router;

