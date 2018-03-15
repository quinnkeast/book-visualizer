import React from 'react';

const BookPage = ({ pageClass, style, book, handleMouseEnter, handleMouseLeave }) => {
  return (
    <li className={pageClass} style={style} data-tip={`${book.title} by ${book.author}`} onMouseEnter={() => handleMouseEnter(book.title)} onMouseLeave={() => handleMouseLeave(book.title)}>
      <div className='book-lines'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </li>
  );
};

export default BookPage;
