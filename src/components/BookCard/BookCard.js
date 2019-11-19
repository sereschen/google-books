import React from 'react';
import { connect } from 'react-redux';
import { addFavorite } from '../../actions/books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './BookCard.scss';
function BookCard({ book, addFavorite, books }) {
  const { id, title, subtitle, imageLinks, authors = [] } = book;
  return (
    <div className="book-card">
      {imageLinks ? (
        <div className="book-image">
          <img src={imageLinks.thumbnail} alt={title} />
          <div className="fav-button">
            {books.some(item => item.id === id) ? (
              <FontAwesomeIcon icon={faHeartSolid} />
            ) : (
              <FontAwesomeIcon icon={faHeartRegular} />
            )}
          </div>
        </div>
      ) : null}
      <div className="book-info">
        <div>{title}</div>
        <ul>
          {authors ? <li>{authors.join(',')}</li> : null}
          {subtitle ? <li>{subtitle}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default connect(({ books }) => ({ books }), { addFavorite })(BookCard);
