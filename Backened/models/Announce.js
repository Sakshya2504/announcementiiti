import mongoose from "mongoose";

const Announce = new mongoose.Schema({
   clubname: { type: String, required: true, minlength: [1, 'Club name must be at least 1 characters long'], maxlength: [50, 'Club name must be at most 50 characters long'] },
   heading: { type: String, required: true, minlength: [1, 'Heading must be at least 1 characters long'], maxlength: [100, 'Heading must be at most 100 characters long'] },
   info: { type: String, required: true, minlength: [1, 'Info must be at least 1 characters long'], maxlength: [500, 'Info must be at most 500 characters long'] }
}, { timestamps: true });

export const Announce_ = mongoose.model('Announce', Announce);