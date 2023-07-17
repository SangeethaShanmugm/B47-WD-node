// const express = require("express"); // 3rd party package
// const { MongoClient } = require("mongodb");
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
import bcrypt from "bcrypt";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

//Mongodb Connection
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb is Connected");
  return client;
}

export const client = await createConnection();

//interceptor | converting body to json | Inbuilt middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳🥳🥳");
});

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log("Server started on PORT", PORT));
