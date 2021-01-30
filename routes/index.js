var express = require('express');
var router = express.Router();

let index = require('../controllers/index');

/* GET home page. */
router.get('/', index.get_landing);
router.post('/', index.submit_lead);

module.exports = router;
