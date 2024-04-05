import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';



const JamesBondBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://openlibrary.org/search.json?q=James+Bond')
      .then((response) => response.json())
      .then((data) => {
        const bookData = data.docs.map((doc) => ({
          title: doc.title,
          author: doc.author_name ? doc.author_name.join(', ') : 'Ukjent forfatter',
          first_publish_year: doc.first_publish_year || 'Ukjent år',
          average_rating: doc.ratings_average || 'Ukjent rating',
          isbn: doc.isbn ? doc.isbn[0] : '', 
          coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` :
           '', 
        }));
        setBooks(bookData);
      })
      .catch((error) => {
        console.error('Feil ved henting av data:', error);
      });
  }, []);
  

  return (
    <div className="container-card">
      <h2>James Bond-bøker</h2>
      <ul>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default JamesBondBooks;
