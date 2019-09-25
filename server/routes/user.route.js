const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();
module.exports = router;

router.route('/')
  //.post(asyncHandler(insert))
  .get(userCtrl.getMyInfo)



// async function insert(req, res) {
//   let user = await userCtrl.insert(req.body);
//   res.json(user);
// }

function validUser(req, res, next) {
  if (!req.user) {
    res.redirect('/api/auth/login');
  }
  next();
}
