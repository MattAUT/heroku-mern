require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./src/db");
const books = require("./src/routes/books");

const app = express();

const PORT = process.env.PORT || 5000;

connect();

console.log("Connected to MongoDB");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("nice");
});

app.use("/api/books", books);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
