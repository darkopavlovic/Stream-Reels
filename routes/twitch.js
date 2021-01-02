const express = require("express");
const router = express.Router();
const axios = require("axios");

// Assign Twitch API variables
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const LIMIT = process.env.LIMIT;

// Get trending clips from Twitch
router.get("/trending/:period/:cursor", async (req, res) => {
  try {
    const response = await axios.get(`https://api.twitch.tv/kraken/clips/top?period=${req.params.period}&limit=${LIMIT}&cursor=${req.params.cursor.replace("emptyCursor", "")}`, {
      headers: { "Client-ID": `${TWITCH_CLIENT_ID}`, "Accept": "application/vnd.twitchtv.v5+json" }
    });
    res.send(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
