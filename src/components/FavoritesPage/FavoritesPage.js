import React from 'react';
import { connect } from 'react-redux';
import BookCard from '../BookCard/BookCard';
function FavoritePage({ favorites }) {
  return (
    <div className="book-shelf">
      {favorites.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default connect(({ favorites }) => ({ favorites }))(FavoritePage);
