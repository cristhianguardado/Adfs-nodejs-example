const fs = require('fs');
const path = require('path');
const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user.model');
const config = require('./config');

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

const samlStrategy = new SamlStrategy({
  entryPoint: config.passport.adfs.entryPoint,
  issuer: config.passport.adfs.callbackUrl,
  callbackUrl: config.passport.adfs.callbackUrl,
  acceptedClockSkewMs: -1,
  identifierFormat: config.passport.adfs.identifierFormat,
  signatureAlgorithm: 'sha256',
  RACComparison: 'exact'
},
function(profile, done) {
  return done(null,
    {
      NameID: profile['nameID'],
      upn: profile['http://schemas.xmlsoap.org/claims/EmailAddress']
  });
});

const jwtLogin = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}, async (payload, done) => {
  try {
    return done(null, payload);
  } catch (error) {
    done(error);
  }
});


passport.use(jwtLogin);
passport.use(samlStrategy);

module.exports = passport;
