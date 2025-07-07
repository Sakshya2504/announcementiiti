import mongoose from "mongoose";
const { Schema } = mongoose;

const RegisSchema = new Schema({
    Name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
    },
    EmailAddress: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@iiti\.ac\.in$/,
    },
    RollNumber: {
        type: String, // Changed to string for length validation
        required: true,
        unique: true,
        minlength: 9,
        maxlength: 12,
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
        type: String, // Changed to string for exact 10-digit control
        required: true,
        unique: true,
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Regis = mongoose.model("Regis", RegisSchema);
export { Regis };