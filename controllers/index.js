const express = require ('express');
let router = express.Router();

router.use('/file',require('./route'));

module.exports = router;