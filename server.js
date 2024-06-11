const express = require("express");
require('dotenv').config()
//console.log(process.env.PORT)
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server Working ");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
