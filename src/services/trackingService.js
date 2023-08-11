const TrackingStatModel = require('../models/TrackingStat');

const createTrackingStat = async (ip, url, userAgent) => {
    const trackingStat = new TrackingStatModel();
    trackingStat.ip = ip;
    trackingStat.url = url;
    trackingStat.userAgent = userAgent;

    const res = await trackingStat.save();
    console.log(res);
}

module.exports = {
    createTrackingStat
};