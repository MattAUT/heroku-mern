const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connect;
