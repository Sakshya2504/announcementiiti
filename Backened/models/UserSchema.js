import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: [5, 'Name must be at least 5 characters long'], maxlenght: [20, 'Name must be at most 20 characters long'] },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w.-]+@iiti\.ac\.in$/, 'Email must be a valid @iiti.ac.in address']
      },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlenght: [10, 'Password must be at most 10 characters long']
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);