import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import './BookCard.scss';
function BookCard({ book, toggleFavorite, favorites }) {
  const { id, title, subtitle, imageLinks, authors = [] } = book;
  return (
    <div className="book-card">
      {imageLinks ? (
        <div className="book-image">
          <img src={imageLinks.thumbnail} alt={title} />
          <div className="fav-button" onClick={() => toggleFavorite(book)}>
            {favorites.some(item => item.id === id) ? (
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

export default connect(
  ({ favorites }) => ({ favorites }),
  { toggleFavorite },
)(BookCard);
