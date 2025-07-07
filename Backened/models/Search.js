// models/Post.js
import mongoose from 'mongoose';

const SearchSchema = new mongoose.Schema({
  title: String,
  category: String, // 'Clubs' or 'Events'
  date: Date,
  time: String,
  location: String,
});

export const Search = mongoose.model('Search', SearchSchema);
