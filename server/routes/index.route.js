const express = require('express');
const passport = require('passport');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', router.use(passport.authenticate('jwt', { session: false })), userRoutes);

module.exports = router;
