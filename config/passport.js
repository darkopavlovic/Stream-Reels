const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const request = require("request");
const User = require("../models/User");
require("./database");

// Assign Twitch API variables
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;
const TWITCH_CALLBACK_URL = process.env.TWITCH_CALLBACK_URL;

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = function (accessToken, done) {
  var options = {
    url: "https://api.twitch.tv/helix/users",
    method: "GET",
    headers: {
      "Client-ID": TWITCH_CLIENT_ID,
      "Accept": "application/vnd.twitchtv.v5+json",
      "Authorization": "Bearer " + accessToken
    }
  };

  request(options, function (error, response, body) {
    if (response && response.statusCode === 200) {
      done(null, JSON.parse(body));
    } else {
      done(JSON.parse(body));
    }
  });
};

passport.use(
  "twitch",
  new OAuth2Strategy(
    {
      authorizationURL: "https://id.twitch.tv/oauth2/authorize",
      tokenURL: "https://id.twitch.tv/oauth2/token",
      clientID: TWITCH_CLIENT_ID,
      clientSecret: TWITCH_CLIENT_SECRET,
      callbackURL: TWITCH_CALLBACK_URL,
      state: true
    },
    function (accessToken, refreshToken, profile, done) {
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;

      // Check if user exists in DB
      User.findOne({ twitch_id: profile.data[0].id }).then((user) => {
        if (!user) {
          // Add new user to DB
          const newUser = new User({
            twitch_id: profile.data[0].id,
            login: profile.data[0].login,
            display_name: profile.data[0].display_name,
            profile_image_url: profile.data[0].profile_image_url,
            email: profile.data[0].email
          });

          // Saves user to DB
          newUser.save();
        }
      });

      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
