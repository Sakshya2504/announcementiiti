import mongoose from 'mongoose';
const Admin = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

export const Admin_ = mongoose.model('Admin', Admin);