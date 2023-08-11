const { trackVisit } = require('../controllers/PageTrackController');
const router = require('express').Router();

router.post('/', trackVisit);

module.exports = router;