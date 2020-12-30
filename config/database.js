const mongoose = require("mongoose");

// Dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Assign MongoDB variables
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

// Connect to DB
const connection = mongoose.connect(
  `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@stream-reels-cluster.bymtk.mongodb.net/${MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    if (mongoose.connection.readyState === 1) {
      console.log(`Connected to ${MONGODB_DATABASE_NAME} database`);
    } else {
      console.log(`Not connected to ${MONGODB_DATABASE_NAME} database`);
    }
    console.log(`Connection State: ${mongoose.connection.readyState}`);
  }
);

// Expose the connection
module.exports = connection;
