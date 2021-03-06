import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
    const { book, shelf, onMove } = props;
    return(
      <li>
        <div className="book">
          <div className="book-top">
          <div
              className="book-cover"
              style={{
                width: 150,
                height: 200,
                backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`,
              }}
            />
            <BookShelfChanger book={book} shelf={shelf} onMove={onMove}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
    );
  };

  export default Book;


