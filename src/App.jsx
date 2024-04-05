import React, { useState } from 'react';
import './App.scss'; 
import { Header, Container, SearchBox, JamesBondBooks, SearchResults,  } from './components/index';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <SearchBox setSearchResults={setSearchResults} />
        {searchResults.length > 0 ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          <JamesBondBooks />
        )}
      </Container>
    </>
  );
};

export default App;
