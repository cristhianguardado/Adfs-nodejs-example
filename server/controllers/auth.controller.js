const jwt = require('jsonwebtoken');
const config = require('../config/config');


module.exports = {
  generateToken
}

function generateToken(req, res) {
  let user = req.user
  var jwtSecret = config.jwtSecret;
  const payload = JSON.stringify(user);
  var token = jwt.sign(payload, jwtSecret);
  res.json({token: token});
}
