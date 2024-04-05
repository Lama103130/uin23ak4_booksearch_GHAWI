// BookDetails.jsx
import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div>
      {/* Vis detaljer om boken */}
      <h2>{book.title}</h2>
      <p>Forfatter: {book.author}</p>
      <p>Publiseringsår: {book.first_publish_year}</p>
      {/* Legg til flere detaljer her */}
    </div>
  );
};

export default BookDetails;
