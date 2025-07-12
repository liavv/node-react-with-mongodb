const express = require('express');
const router = express.Router();
const Warranty = require('../models/Name'); // Assuming Warranty is in the same file as Name

router.post('/add', async (req, res) => {
  try {
    const { warrantyFor, warrantyExpiration, description, status } = req.body;
    const newWarranty = new Name({ Warranty });
    await newWarranty.save();
    res.json(newWarranty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const warranties = await Warranty.find().sort({ createdAt: -1 });
    res.json(warranties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
