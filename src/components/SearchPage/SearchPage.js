import React, { useState, useEffect } from 'react';
import { getBooks } from '../../api/books';
import BookCard from '../BookCard/BookCard';
import './SearchPage.scss';
function SearchPage() {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchText.length > 3) {
      getBooks({ q: searchText }).then(res => setBooks(res));
    } else {
      setBooks([]);
    }
  }, [searchText]);
  return (
    <div className="search-page">
      <h1>Google Books finder</h1>
      <input
        type="text"
        value={searchText}
        placeholder="Search for title, author or other info"
        onChange={({ target }) => setSearchText(target.value)}
      />
      <div className="book-shelf">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
