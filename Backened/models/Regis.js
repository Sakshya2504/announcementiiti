import mongoose from "mongoose";
import { Schema } from "mongoose";
const RegisSchema = new Schema({
    Name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    EmailAddress: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@iiti\.ac\.in$/,
    },
    RollNumber: {
        type: Number,
        required: true,
        unique: true,
        minlength: 9,
    },
    Program: {
        type: String,
        required: true,
    },
    Branch: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    }
});

const Regis = mongoose.model('Regis', RegisSchema);
export { Regis };