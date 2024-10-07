import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const dataSchema = new mongoose.Schema({
  userID: {
    required: true,
    type: Number,
    unique: true
  },
  userName: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  realName: {
    required: true,
    type: String
  },
  roles: {
    required: true,
    type: Array,
    default: ['user']
  }
});

dataSchema.pre("save", async function() {
  this.password = await bcrypt.hash(this.password, 12);
})

export const User = mongoose.model('User', dataSchema);