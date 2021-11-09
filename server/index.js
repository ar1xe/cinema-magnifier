import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const users = [];

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.status(200).json("Server working");
// });

// app.post("/registration", (req, res) => {
//   console.log(req.body);
//   if (req.body.email) users.push(req.body);
//   res.status(200).json("registration");
// });

app.listen(PORT, () => {
  console.log("Server has been started... PORT 3333");
});
