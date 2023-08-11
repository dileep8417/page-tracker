const express = require('express');
const app = express();
const trackRouter = require('./routes/pageTrack');
require('./db').connect();

app.use('/track', trackRouter);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log('Server Started on http://localhost:' + port));