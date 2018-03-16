import React from 'react';
import BookPage from './BookPage';
import { numberOfPagesToRepresentBook } from './bookdata'; 

const Book = ({ book, bookClass, style, handleMouseEnter, handleMouseLeave }) => {
  let pages = [];
  let count = numberOfPagesToRepresentBook(book.wordcount);
  for (let i = 0; i < count; i++) {
    pages.push(<BookPage key={i} pageClass={bookClass} style={style} book={book} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />);
  }
  return pages;
};

export default Book;
