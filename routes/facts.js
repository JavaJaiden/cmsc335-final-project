const express = require('express');
const router = express.Router();
const Fact = require('../models/Fact');

// POST /facts - Create a new fact (from form)
router.post('/', async (req, res) => {
  try {
    const { content } = req.body;
    console.log('Received fact to save:', content);
    if (content) {
      const newFact = await Fact.create({ content });
      console.log('Fact saved successfully:', newFact._id);
    }
    res.redirect('/');
  } catch (err) {
    console.error('Error saving fact to MongoDB:', err.message);
    res.redirect('/');
  }
});

module.exports = router;

