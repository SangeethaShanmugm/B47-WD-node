import { client } from "./index.js";

export async function getAllMovies(req) {
  return await client
    .db("b47-wd")
    .collection("movies")
    .find(req.query)
    .toArray();
}
export async function getMoviesByID(id) {
  return await client.db("b47-wd").collection("movies").findOne({ id: id });
}
export async function deleteMoviesByID(id) {
  return await client.db("b47-wd").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovie) {
  return await client.db("b47-wd").collection("movies").insertMany(newMovie);
}

export async function updateMovies(id, updateMovie) {
  return await client
    .db("b47-wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateMovie });
}
