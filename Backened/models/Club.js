import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: String,
  time: String,
  location: String,
  info: String,
  image: String,
});

const clubHeadSchema = new mongoose.Schema({
  name: String,
  about: String,
  email: String,
  image: String,
  linkedin: String,
});

const socialSchema = new mongoose.Schema({
  instagram: String,
  linkedin: String,
  facebook: String,
});

const clubSchema = new mongoose.Schema({
  name: String,
  heading: String,
  info: String,
  logo: String,
  events: [eventSchema],
  clubHead: [clubHeadSchema],
  social: [socialSchema],
});

export const Club = mongoose.model("Club", clubSchema);
