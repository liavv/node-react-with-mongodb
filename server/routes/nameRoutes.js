const express = require('express');
const router = express.Router();
const Name = require('../models/Name');

router.post('/add', async (req, res) => {
  try {
    const { name } = req.body;
    const newName = new Name({ name });
    await newName.save();
    res.json(newName);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const names = await Name.find().sort({ createdAt: -1 });
    res.json(names);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
