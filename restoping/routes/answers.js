var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('I will answer you if you talk to me in a correct manner.');
});

router.get('/:address', function(req, res) {
  var address = req.params.address.toUpperCase();
  switch (address) {
    case 'Abu'.toUpperCase():
      res.json('Dhabi');
      break;
    case 'Marco'.toUpperCase():
      res.json('Polo');
      break;
    default:
      res.json('');
      break;
  }
});

module.exports = router;
