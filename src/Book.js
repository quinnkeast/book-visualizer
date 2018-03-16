import React from 'react';
import BookPage from './BookPage';
import { numberOfPagesToRepresentBook } from './bookdata'; 

const Book = ({ book, bookClass, style, handleMouseEnter, handleMouseLeave }) => {
  let pages = [];
  let count = numberOfPagesToRepresentBook(book.wordcount);
  for (let i = 0; i < count; i++) {
    pages.push(<BookPage key={i} style={style} />);
  }
  return (
    <div className={bookClass} data-tip={`${book.title} by ${book.author}`} onMouseEnter={() => handleMouseEnter(book.title)} onMouseLeave={() => handleMouseLeave(book.title)}>
      {pages}
    </div>
  );
};

export default Book;
