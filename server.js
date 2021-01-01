const express = require("express");
const cors = require("cors");
const path = require("path");

// Dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Initialize Express and middlewares
const app = express();
app.use(cors());

// Twitch API route
app.use("/twitch", require("./routes/twitch"));

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
