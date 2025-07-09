// routes/searchRoute.js
import express from 'express';
import { Search } from '../models/Search.js';

const SearchRoute = express.Router();

SearchRoute.get('/', async (req, res) => {
  const { searchTerm, category, startDate, endDate, time, location } = req.query;

  const query = {};

  if (searchTerm) {
    query.title = { $regex: searchTerm, $options: 'i' };
  }

  if (category) {
    query.category = category;
  }

  if (location) {
    query.location = { $regex: location, $options: 'i' };
  }

  if (time) {
    query.time = time; // exact match, or use regex if needed
  }

  if (startDate && endDate) {
    query.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  try {
    const results = await Search.find(query).sort({ date: 1 });
    res.json(results);
  } catch (err) {
    console.error('Search failed', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default SearchRoute;
