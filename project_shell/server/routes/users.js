//This file is run when express encounters a http request starting with '/users'.
var express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;	

