import React, { Component } from 'react';
import './App.css';
import { books, alphabeticalAuthors as authors, alphabeticalSeries as series } from './bookdata';
import Book from './Book';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

function nearInt(op, target, range) {
  return op < target + range && op > target - range;
}

function shuffle(array, offset) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function generateColours(n, offset) {
  let distance = 360 / n;
  let colours = [];
  for (let i = 1; i <= n; i++) {
    colours.push({
      'hue': distance * i + offset,
      'saturation': 50,
      'lightness': 55
    });
  }
  return toHSL(shuffle(colours, offset));
}

function toHSL(colours) {
  let formattedColours = [];
  for (let i = 0; i < colours.length; i++) {
    formattedColours.push(`hsl(${colours[i].hue}deg, ${colours[i].saturation}%, ${colours[i].lightness}%)`);
  }
  return formattedColours;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSelectAuthor = this.handleSelectAuthor.bind(this);
    this.handleSelectSeries = this.handleSelectSeries.bind(this);
    this.resetFilter = this.resetFilter.bind(this);

    this.state = {
      focusedBook: null,
      colours: generateColours(books.length, (360 / books.length)),
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

  resetFilter() {
    this.setState({
      filter: 'NONE',
      selectedAuthor: null,
      selectedSeries: null
    });
  }

  handleSelectAuthor(author) {
    if (this.state.selectedAuthor === author) {
      this.resetFilter();
    } else {
      this.setState({
        filter: 'AUTHOR',
        selectedAuthor: author,
        selectedSeries: null
      });
    }
  }

  handleSelectSeries(series) {
    if (this.state.selectedSeries === series) {
      this.resetFilter();
    } else {
      this.setState({
        filter: 'SERIES',
        selectedAuthor: null,
        selectedSeries: series
      });
    }
  }

  render() {
    const renderBooks = books.map((book, key) => {
      let bookClass = classNames({
        'book': true,
        'book--active': this.state.focusedBook === book.title,
        'book--desaturated': (this.state.filter === 'SERIES' && this.state.selectedSeries !== book.series) || (this.state.filter === 'AUTHOR' && this.state.selectedAuthor !== book.author),
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
                <li className='book-cover'></li>
                {renderBooks}
                <li className='book-cover'></li>
                <ReactTooltip effect='solid' />
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <p><strong>Authors</strong></p>
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
              <p><strong>Series</strong></p>
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
