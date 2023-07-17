import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genPassword, createUser, getUserByName } from "../helper.js";
const router = express.Router();

//signup/register
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //Validate if username is already present
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);
  //if username already exist
  if (isUserExist) {
    res.status(400).send({ message: "Username already exists" });
    return;
  }
  //password validation
  if (
    !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[_#!@%&]).{8,}$/g.test(
      password
    )
  ) {
    res.status(400).send({ message: "Password pattern does not match" });
    return;
  }
  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //Validate if username is already present
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
  if (!userFromDB) {
    res.status(400).send({ message: "Invalid Credentials" });
    return;
  }

  const storedDbPassword = userFromDB.password;
  const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
  if (!isPasswordMatch) {
    res.status(400).send({ message: "Invalid Credentials" });
    return;
  }
  //generate token
  const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
  res.send({ message: "Successfully Logged In", token: token });
});

export const usersRouter = router;

//Validate if username is already present
//Validate if password matches
