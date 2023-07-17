import { client } from "./index.js";
import bcrypt from "bcrypt";

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

export async function genPassword(password) {
  //generating random string
  const salt = await bcrypt.genSalt(10); //bcrypt.genSalt(no. of rounds)
  console.log(salt);
  //salt + password => hashedPassword
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b47-wd")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("b47-wd")
    .collection("users")
    .findOne({ username: username });
}
