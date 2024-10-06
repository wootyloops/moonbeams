// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application

// Probably want to rewrite this tbh

import express from 'express';
import * as bcrypt from bcryptjs;
import { User } from '../models/User.js';
import { createSecretToken } from '../util/SecretToken.js';

export const Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: 'User already exists.' });
    };
    
    // Do User.countDocuments() and increment to find new userID

    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
}