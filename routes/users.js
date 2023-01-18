var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  // validate incoming request body
  // check in database
  // check password hash if found
  // send response based on authentication
  res.json({
    success: true,
    user: {} // some user object
  })
});

module.exports = router;



