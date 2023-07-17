import express from "express";
import {
  getAllMovies,
  getMoviesByID,
  deleteMoviesByID,
  addMovies,
  updateMovies,
} from "../helper.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

//REST Api endpoints

//get all movies
router.get("/", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);

  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const movie = await getAllMovies(req);
  res.send(movie);
});

//get movie by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, "ID=", id);
  const movie = await getMoviesByID(id);
  movie
    ? res.send(movie)
    : res.status(404).send({ message: "No movies found" });
});

//delete movies by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await deleteMoviesByID(id);
  res.send(movie);
});

//add movies
router.post("/", async (req, res) => {
  const newMovie = req.body;
  console.log(newMovie);
  const result = await addMovies(newMovie);
  res.send(result);
});

//update movies
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateMovie = req.body;
  console.log(updateMovie);
  const result = await updateMovies(id, updateMovie);
  res.send(result);
});

export const moviesRouter = router;
