var code = '4/AAAog-rBSj_ws30O1OeTxiIYH5omfoFh2UHb7Yt2PxlM9ctv8uKmdqPFRUUzrh4xQTTpC1vVyxpVMHDFKgAjRPQ#'

var {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var YOUR_CLIENT_ID = '208084122060-960bg1kf0fu4o03tmfppkgpld9uhdous.apps.googleusercontent.com'
var YOUR_CLIENT_SECRET = 'PumeX-EytBX5uuXOyh3hs7KA'
var YOUR_REDIRECT_URL = 'http://localhost/'
var oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);
oauth2Client.getToken(code, function (err, tokens) {
    console.log(tokens)
    // Now tokens contains an access_token and an optional refresh_token. Save them.
    if (!err) {
      oauth2Client.setCredentials(tokens);
    }
  });