const { createTrackingStat } = require('../services/trackingService');

const trackVisit = async (req, res) => {
    const ip = req.ip;
    const clienturl = (req.get('referer') || '') + req.url;
    const userAgent = req.get('User-Agent');

    await createTrackingStat(ip, clienturl, userAgent);

    res.send('tracking');
}

module.exports = {
    trackVisit,
}