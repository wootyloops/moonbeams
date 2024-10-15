import { User } from '../Models/User.js';
import jwt from 'jsonwebtoken';

export const userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
     return res.json({ loggedIn: false });
  }; 
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ loggedIn: false })
    } else {
      const user = await User.findById(data.id); 
      if (user) {
        return res.json({ loggedIn: true, email: user.email }); 
      } else {
        return res.json({ loggedIn: false }); 
      }
    }; 
    next(); 
  }); 
}