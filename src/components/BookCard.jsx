const BookCard = ({ book }) => {
  if (!book) {
    return <div className="error-message">Boken kunne ikke lastes.</div>;
  }

  const {
    title = 'Ukjent tittel',
    author = 'Ukjent forfatter',
    first_publish_year = 'Ukjent år',
    average_rating = 'Ukjent rating',
    isbn,
    cover_i,
    openLibraryIds,
  } = book;

  // bokomslag
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : isbn
      ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`
      : ''; 

  // kjøp på Amazon
  
  const purchaseUrl =
  (openLibraryIds && openLibraryIds.length > 0 && `https://openlibrary.org${openLibraryIds[0]}`) ||
  (isbn && `https://www.amazon.com/s?k=${isbn}`) ||
  '';
  return (
    <div className="book-card">
      <img src={coverUrl} alt={`Omslag for boken: ${title}`} />
      <strong>{title}</strong> av {author}
      <p>Første år publisert: {first_publish_year}</p>
      <p>Gjennomsnittlig rating: {average_rating}</p>
      {purchaseUrl && (
        <a
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Kjøp på Amazon
        </a>
      )}
    </div>
  );
};

export default BookCard;
