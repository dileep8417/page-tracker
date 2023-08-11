const mongoose = require('mongoose');
const { getCurrentTimeString } = require('../utils');

// Define Schema
const trackingStatSchema = new mongoose.Schema({
    ip: String,
    url: String,
    userAgent: String,
    createdAt: {
        type: String,
        default: () => getCurrentTimeString()
    }
});

// Create Model
const TrackingStatModel = mongoose.model('trackingStat', trackingStatSchema);

module.exports = TrackingStatModel;