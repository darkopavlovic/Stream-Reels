const express = require("express");
const session = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
require("./config/passport");

// Initialize Express and middlewares
const app = express();
app.use(cors());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Set route to start OAuth link, this is where you define scopes to request
app.get("/auth/twitch", passport.authenticate("twitch", { scope: "user_read" }));

// Set route for OAuth redirect
app.get("/auth/twitch/callback", passport.authenticate("twitch", { successRedirect: "/", failureRedirect: "/" }));

// If user has an authenticated session, allow it, otherwise require authentication
app.get("/login", (req, res) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    res.send(req.session.passport.user);
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Logout authenticated user
app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

// Port assignment
const PORT = process.env.PORT;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
