const express = require('express');
const app = express();
const trackRouter = require('./routes/pageTrack');
require('dotenv').config();
require('./db').connect();
const cors = require('cors');
app.use(cors());

app.use('/track', trackRouter);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log('Server Started on http://localhost:' + port));