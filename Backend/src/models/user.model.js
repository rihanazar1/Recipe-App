import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },

    email:{
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String
    }
})

const userModel = mongoose.model("user", userSchema)

export default userModel;

