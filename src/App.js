import React, { Component } from 'react';
import './App.css';
import books from './bookdata';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

const averageWordsPerPage = () => {
  let averages = [];
  books.map((book) => averages.push(book.words / book.pages));
  const sum = averages.reduce((total, value) => total + value);
  return Math.round(sum / averages.length);
};

const totalWords = () => {
  return books.reduce((total, book) => total + book.words, 0);
}

const totalPages = () => {
  return Math.round(totalWords / averageWordsPerPage(books));
}

const lowestWordCount = () => {
  const book = books.reduce((prev, curr) => prev.words < curr.words ? prev : curr);
  return book.words;
}

const highestWordCount = () => {
  const book = books.reduce((prev, curr) => prev.words < curr.words ? prev : curr);
  return book.words;
}

const numberOfPagesToRepresentBook = (wordcount) => {
  return Math.round((wordcount / averageWordsPerPage()) * reducingPercentage(1.5));
};

const reducingPercentage = (minimum = 1) => {
  return minimum / (totalWords(books) / lowestWordCount(books));
}

const getRandomColour = () => {
  const letters = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

const generateColours = () => {
  const colours = books.map(book => getRandomColour());
  return colours;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSelectAuthor = this.handleSelectAuthor.bind(this);
    this.handleSelectSeries = this.handleSelectSeries.bind(this);

    this.state = {
      focusedBook: null,
      colours: generateColours(),
      filter: 'NONE',
      selectedAuthor: null,
      selectedSeries: null
    };
  }

  handleMouseEnter(key) {
    if (this.state.focusedBook === key) return;
    this.setState({focusedBook: key});
  }

  handleMouseLeave(key) {
    this.setState({focusedBook: null});
  }

  handleSelectAuthor(author) {
    this.setState({
      filter: 'AUTHOR',
      selectedAuthor: author,
      selectedSeries: null
    });
  }

  handleSelectSeries(series) {
    this.setState({
      filter: 'SERIES',
      selectedAuthor: null,
      selectedSeries: series
    });
  }

  render() {
    const authors = books.reduce((prev, cur) => {
      return (prev.indexOf(cur.author) < 0) ? prev.concat([cur.author]) : prev;
    }, []);

    const series = books.reduce((prev, cur) => {
      return (prev.indexOf(cur.series) < 0) ? prev.concat([cur.series]) : prev;
    }, []);

    const bookPages = books.map((book, key) => {
      let bookClass = classNames({
        'book': true,
        'book--active': this.state.focusedBook === book.title,
        'book--series-active': this.state.filter === 'SERIES' && this.state.selectedSeries === book.series,
        'book--author-active': this.state.filter === 'AUTHOR' && this.state.selectedAuthor === book.author
      });
      const style = {
        backgroundColor: this.state.colours[key]
      };
      let pages = [];
      for (let i = 0; i < numberOfPagesToRepresentBook(book.words); i++) {
        pages.push(
          <li className={bookClass} style={style} alt={book.title} data-tip={`${book.title} by ${book.author}`} onMouseEnter={() => this.handleMouseEnter(book.title)} onMouseLeave={() => this.handleMouseLeave(book.title)}>
            <div className='book-lines'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
              <div className='line'></div>
            </div>
          </li>);
      }
      return pages;
    });

    return (
      <div className='App'>
        <div className='container container-medium'>
          <div className='row book-pages'>
            <div className='col-12'>
              <ul className='books'>
                {bookPages}
                <ReactTooltip effect='solid' />
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h2>Authors</h2>
              <ul className='authors-list'>
                {authors.map((author, key) => {
                  let authorClass = classNames({
                    'author': true,
                    'author--selected': this.state.filter === 'AUTHOR' && this.state.selectedAuthor === author
                  });
                  return <li className={authorClass} key={key} onClick={() => this.handleSelectAuthor(author)}>{author}</li>;
                })}
              </ul>
            </div>
            <div className='col-6'>
              <h2>Series</h2>
              <ul className='series-list'>
                {series.map((series, key) => {
                  let seriesClass = classNames({
                    'series': true,
                    'series--selected': this.state.filter === 'SERIES' && this.state.selectedSeries === series
                  });
                  return <li className={seriesClass} key={key} onClick={() => this.handleSelectSeries(series)}>{series}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
