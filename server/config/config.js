require('dotenv').config();

var NODE_ENV = process.env.NODE_ENV || 'development';
var SERVER_PORT = process.env.PORT || '3000';
var JWT_SECRET = '0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
var MONGO_PORT = 27017
var MEAN_FRONTEND="angular"

if(NODE_ENV == 'development'){
  var MONGOOSE_DEBUG = true;
  var MONGO_HOST = 'mongodb://localhost/Adfs-nodejs-example-test'
  //change for your ADFS Service
  var ADFS_ENTRY_POINT = 'https://example.com/adfs/ls/';
  //change for route with domain
  var ADFS_ISSUER = 'https://example.mx/api/auth/adfs/postResponse';
  //change for route with domain
  var ADFS_CALLBACK_URL = 'https://example.com/api/auth/adfs/postResponse';
  var ADFS_AUTHN_CONTEXT = 'http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/windows';
  var ADFS_IDENTIFER_FORTMAT = null
} else{
  var MONGOOSE_DEBUG = false;
  var MONGO_HOST = 'mongodb://localhost/Adfs-nodejs-example'
  var ADFS_ENTRY_POINT = '';
  var ADFS_ISSUER = '';
  var ADFS_CALLBACK_URL = '';
  var ADFS_CERT = '';
  var ADFS_AUTHN_CONTEXT = '';
  var ADFS_IDENTIFER_FORTMAT = null
}

const config = {
  env: NODE_ENV,
  port: SERVER_PORT,
  jwtSecret: JWT_SECRET,
  frontend: MEAN_FRONTEND,
  passport: {
    strategy: 'saml',
    adfs: {
      entryPoint: ADFS_ENTRY_POINT,
      issuer: ADFS_ISSUER,
      callbackUrl: ADFS_CALLBACK_URL,
      cert: ADFS_CERT,
      authnContext: ADFS_AUTHN_CONTEXT,
      identifierFormat: ADFS_IDENTIFER_FORTMAT
    }
  },
  mongooseDebug: MONGOOSE_DEBUG,
  mongo: {
    host: MONGO_HOST,
    port: MONGO_PORT
  }
};

module.exports = config;
