const { createTrackingStat } = require('../services/trackingService');

const trackVisit = async (req, res) => {
    const ip = req.ip;
    const clienturl = `${req.protocol}://${req.hostname}${req.originalUrl}`;
    const userAgent = req.get('User-Agent');

    await createTrackingStat(ip, clienturl, userAgent);

    res.send('tracking');
}

module.exports = {
    trackVisit,
}