  
import React from 'react';
import { useState, useEffect } from 'react';
const filter = [
   // Add your filter criteria here
   (item) => item.title.includes(searchTerm),
   (item) => item.category === selectedCategory,
   (item) => item.date >= startDate && item.date <= endDate,
]
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // This component is currently empty, but you can add search functionality here.
  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="Clubs">Clubs</option>
        <option value="Events">Events</option>
        <option value="date">Date</option>
        <option value="place">Place</option>
      </select>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    <div>
      {/* Display search results here */}
      {/* You can map over the filtered results and display them */}
      {filter.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <p>{item.date}</p>
        </div>
      ))}
      <div>
        <h2>Filtered Results:</h2>
        {filter.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>All Results:</h2>
        {filter.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
export default Search;