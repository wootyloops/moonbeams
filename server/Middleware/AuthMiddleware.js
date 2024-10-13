import { User } from '../Models/User.js';
import jwt from 'jsonwebtoken';

export const userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(403).json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.status(401).json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.status(401).json({ status: false })
    }
  })
}