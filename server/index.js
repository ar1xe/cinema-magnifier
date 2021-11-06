import express from "express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3333;
const DB_URL = "";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("Server working");
});

app.listen(PORT, () => {
  console.log("Server has been started... PORT 3333");
});
