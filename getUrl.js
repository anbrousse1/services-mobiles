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

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/datastore'
];
console.log("OKKKKK")

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: 'foo'
});

console.log(url)

