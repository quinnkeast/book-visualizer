import React, { Component } from 'react';
import './App.css';
import { books, authors, series } from './bookdata';
import Book from './Book';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

const getRandomColour = () => {
  const letters = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

const generateColours = (count) => {
  let colours = [];
  for (let i = 0; i < count; i++) {
    colours.push(getRandomColour());
  }
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
      colours: generateColours(books.length),
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
    const renderBooks = books.map((book, key) => {
      let bookClass = classNames({
        'book': true,
        'book--active': this.state.focusedBook === book.title,
        'book--series-active': this.state.filter === 'SERIES' && this.state.selectedSeries === book.series,
        'book--author-active': this.state.filter === 'AUTHOR' && this.state.selectedAuthor === book.author
      });
      const style = {
        backgroundColor: this.state.colours[key]
      };
      return <Book book={book} key={key} bookClass={bookClass} style={style} handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave} />
    });

    return (
      <div className='App'>
        <div className='container container-medium'>
          <div className='row book-pages'>
            <div className='col-12'>
              <ul className='books'>
                {renderBooks}
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
