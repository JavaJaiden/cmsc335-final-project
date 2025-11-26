const express = require('express');
const router = express.Router();
const Fact = require('../models/Fact');

// POST /facts - Create a new fact (from form)
router.post('/', async (req, res) => {
  try {
    const { content } = req.body;
    if (content) {
      await Fact.create({ content });
    }
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

module.exports = router;

