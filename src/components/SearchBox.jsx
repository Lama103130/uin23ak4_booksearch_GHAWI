import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ setSearchResults }) => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.length >= 3) {
      setIsLoading(true);
      fetch(`https://openlibrary.org/search.json?title=${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.docs.map(doc => ({
            title: doc.title,
            author: doc.author_name ? doc.author_name.join(', ') : 'Ukjent forfatter',
            first_publish_year: doc.first_publish_year || 'Ukjent år',
            average_rating: doc.ratings_average || 'Ukjent rating',
            cover_id: doc.cover_i,
            isbn: doc.isbn ? doc.isbn[0] : '', 
            amazonIds: doc.id_amazon || [],
          })));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Feil ved henting av data:', error);
          setError('En feil oppstod under søket.');
          setIsLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  };
  

  return (
    <div className="hero-main">
      <h6 className="subtitle">Velkommen til biblioteket</h6>
      <h4 className="title"><em>Finn </em>din bok</h4>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="form-text"
          type="text"
          placeholder="Søk etter bøker..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="button" type="submit">
          <FaSearch className="Search" size={20} />
        </button>
      </form>
      {isLoading && <div>Laster...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SearchBox;
