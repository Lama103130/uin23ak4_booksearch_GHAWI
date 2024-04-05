import React from 'react';
import BookCard from './BookCard';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="container-card">
      <h2>Søkeresultater</h2>
      <ul>
        {searchResults.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
