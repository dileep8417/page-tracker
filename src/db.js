const mongoose = require('mongoose');

exports.connect = async () => {
    const dbName = process.env.DB || 'page_tracker'
    const dbUrl = process.env.DBURL || 'mongodb://127.0.0.1:27017/';
    const connectionString = dbUrl + dbName;
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to DB');
    } catch (e) {
        console.log(e);
    }
}