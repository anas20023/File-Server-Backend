import express from "express";
const app = express();
const port = 3000 || process.env.PORT;

app.use("/", (req, res) => {
  res.json({"Messege":"Server Working !!"});
});
app.listen(port, () => {
  console.log(`Server is Running in port ${port}`);
});
