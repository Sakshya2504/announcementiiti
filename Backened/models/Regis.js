import mongoose from "mongoose";
import { Schema } from "mongoose";
const RegisSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    EmailAddress: {
        type: String,
        required: true,
        unique: true,
    },
    RollNumber: {
        type: Number,
        required: true,
        unique: true,
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
    }
});

const Regis = mongoose.model('Regis', RegisSchema);
export { Regis };