// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application

import { User } from '../Models/User.js';
import { createSecretToken } from '../util/SecretToken.js';
import bcrypt from 'bcryptjs';

export const Signup = async (req, res, next) => {
    const { email, password, userName, roles} = req.body;

    const data = new User({
      email: email,
      password: password,
      roles: roles
    })

    const existingUser = await User.findOne({email: email});
    if (existingUser) { 
      return res.status(400).json({ message: 'Email already in use.' }); 
    };

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
}

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body; 
    if(!email || !password){
      return res.json({message:'All fields are required'})
    }; 
    const user = await User.findOne({ email });
    if(!user){
      return res.status(401).json({ message:'Incorrect password or email' }) 
    }; 
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.status(401).json({ message:'Incorrect password or email' }) 
    }; 
     const token = createSecretToken(user._id); 
     res.cookie("token", token, {
       withCredentials: true, 
       httpOnly: false, 
     }); 
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error); 
  }
};  