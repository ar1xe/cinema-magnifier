import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3333;

const app = express();
// app.use(favicon(__dirname + "./public/favicon.png"));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const users = [];
const favorites = {
  actors: [],
  movies: [],
};
const notes = [];

app.post("/notes", (req, res) => {
  if (req.body.element.note) notes.push(req.body.element);
  res.status(200).json({ note });
});

app.post("/registration", (req, res) => {
  // console.log(req.body);
  if (req.body.element.email) users.push(req.body.element);
  res.status(200).json({ isRegistration: true });
});

app.post("/authorization", (req, res) => {
  const currentUser = users.find((user) => {
    // console.log(user.nickname);
    // console.log(req.body.element.username);
    return user.nickname === req.body.element.username;
  });

  if (currentUser) {
    if (currentUser.password === req.body.element.password) {
      res.status(200).json({ isAvtorization: true });
    } else {
      res.status(200).json("password is wrong");
    }
  } else {
    res.status(200).json("The username or password you entered is incorrect");
  }
});

app.post("/favorite/addElement", (req, res) => {
  if (req.body.type === "actors") {
    if (favorites.actors.find((elem) => elem.id === req.body.element.id)) {
      favorites.actors = favorites.actors.filter(
        (elem) => elem.id !== req.body.element.id
      );
    } else {
      favorites.actors.push(req.body.element);
    }
  } else if (req.body.type === "movies") {
    if (favorites.movies.find((elem) => elem.id === req.body.element.id)) {
      favorites.movies = favorites.movies.filter(
        (elem) => elem.id !== req.body.element.id
      );
    } else {
      favorites.movies.push(req.body.element);
    }
  }
  console.log(favorites);
  res.status(200).json("favorite");
});

app.get("/favorite/fetchFavorites", (req, res) => {
  res.status(200).json(favorites);
});

app.listen(PORT, () => {
  console.log("Server has been started... PORT 3333");
});
