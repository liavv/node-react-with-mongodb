const mongoose = require('mongoose');


const warrantySchema = new mongoose.Schema({
  warrantyFor: { type: String, required: true },
  warrantyExpiration: { type: Date, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['active', 'expired'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Warranty', warrantySchema);
