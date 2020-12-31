const express = require("express");
const cors = require("cors");
const path = require("path");

// Dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Assign Twitch API variables
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

// Initialize Express and middlewares
const app = express();
app.use(cors());

// Prod environment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Port assignment
const PORT = process.env.PORT;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
