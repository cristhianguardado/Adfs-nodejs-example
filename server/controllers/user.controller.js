const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email(),
})

module.exports = {
  getMyInfo
  //insert
}

function getMyInfo(req, res){
  res.json(req.user );
}

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  return await new User(user).save();
}
