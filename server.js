const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Working");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
