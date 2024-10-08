import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const dataSchema = new mongoose.Schema({
  password: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  nickName: {
    required: false,
    type: String
  },
  roles: {
    required: true,
    type: String,
    default: 'user'
  }
});

dataSchema.pre("save", async function() {
  this.password = await bcrypt.hash(this.password, 12);
});

export const User = mongoose.model('User', dataSchema);