// const express = require("express"); // 3rd party package
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const PORT = 9000;
// req => what we send to Server
// res => what we receive from Server

//Mongodb Connection
const MONGO_URL = "mongodb://0.0.0.0:27017";
//mongodb://localhost
//mongodb://localhost:27017
//mongodb://0.0.0.0:27017
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb is Connected");
  return client;
}

const client = await createConnection();

//interceptor | converting body to json | Inbuilt middleware
app.use(express.json());

//REST Api endpoints

app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳🥳🥳");
});

//Task
// /movies => all the movies  ✅
// /movies?language=English => only english movies ✅
// /movies?rating=8 => only those rated movies ✅
// /movies?language=English&rating=8 => filter by language & rating ✅

//get all movies
app.get("/movies", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);
  // let filteredMovies = movies;
  // if (language) {
  //   filteredMovies = movies.filter((mv) => mv.language == language);
  // }
  // if (rating) {
  //   filteredMovies = movies.filter((mv) => mv.rating == rating);
  // }
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const movie = await client
    .db("b47-wd")
    .collection("movies")
    .find(req.query)
    .toArray();
  res.send(movie);
});

//get movie by id
app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, "ID=", id);
  //db.movies.findOne({id:"100"})
  // const movie = movies.find((mv) => mv.id == id);
  const movie = await client
    .db("b47-wd")
    .collection("movies")
    .findOne({ id: id });
  movie
    ? res.send(movie)
    : res.status(404).send({ message: "No movies found" });
});

//delete book by id
app.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await client
    .db("b47-wd")
    .collection("movies")
    .deleteOne({ id: id });
  res.send(movie);
});

//add movies
app.post("/movies", async (req, res) => {
  const newMovie = req.body;
  console.log(newMovie);
  const result = await client
    .db("b47-wd")
    .collection("movies")
    .insertMany(newMovie);
  res.send(result);
});

app.listen(PORT, () => console.log("Server started on PORT", PORT));
