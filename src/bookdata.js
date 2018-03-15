const books = [
  {
    "title": "The Eye of the World",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 334,
    "wordcount": 305902,
    "type": "Fiction"
  },
  {
    "title": "The Great Hunt",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 782,
    "wordcount": 267078,
    "type": "Fiction"
  },
  {
    "title": "The Dragon Reborn",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 681,
    "wordcount": 251392,
    "type": "Fiction"
  },
  {
    "title": "The Shadow Rising",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 981,
    "wordcount": 393823,
    "type": "Fiction"
  },
  {
    "title": "The Fires of Heaven",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 963,
    "wordcount": 354109,
    "type": "Fiction"
  },
  {
    "title": "Lord of Chaos",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 987,
    "wordcount": 389823,
    "type": "Fiction"
  },
  {
    "title": "A Crown of Swords",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 856,
    "wordcount": 295028,
    "type": "Fiction"
  },
  {
    "title": "The Path of Daggers",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 672,
    "wordcount": 226687,
    "type": "Fiction"
  },
  {
    "title": "Winter’s Heart",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 766,
    "wordcount": 238789,
    "type": "Fiction"
  },
  {
    "title": "Crossroads of Twilight",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 822,
    "wordcount": 271632,
    "type": "Fiction"
  },
  {
    "title": "Knife of Dreams",
    "author": "Robert Jordan",
    "series": "The Wheel of Time",
    "pages": 837,
    "wordcount": 315163,
    "type": "Fiction"
  },
  {
    "title": "The Gathering Storm",
    "author": "Brandon Sanderson",
    "series": "The Wheel of Time",
    "pages": 766,
    "wordcount": 297502,
    "type": "Fiction"
  },
  {
    "title": "Towers of Midnight",
    "author": "Brandon Sanderson",
    "series": "The Wheel of Time",
    "pages": 864,
    "wordcount": 327052,
    "type": "Fiction"
  },
  {
    "title": "A Memory of Light",
    "author": "Brandon Sanderson",
    "series": "The Wheel of Time",
    "pages": 912,
    "wordcount": 353906,
    "type": "Fiction"
  },
  {
    "title": "Leviathan Wakes",
    "author": "James S. A. Corey",
    "series": "The Expanse",
    "pages": 582,
    "wordcount": 183520,
    "type": "Fiction"
  },
  {
    "title": "Caliban’s War",
    "author": "James S. A. Corey",
    "series": "The Expanse",
    "pages": 624,
    "wordcount": 193440,
    "type": "Fiction"
  },
  {
    "title": "The Fifth Season",
    "author": "N.K. Jemisin",
    "series": "The Broken Earth",
    "pages": 512,
    "wordcount": 158720,
    "type": "Fiction"
  },
  {
    "title": "The Stone Sky",
    "author": "N.K. Jemisin",
    "series": "The Broken Earth",
    "pages": 300,
    "wordcount": 93000,
    "type": "Fiction"
  },
  {
    "title": "The Obelisk Gate",
    "author": "N.K. Jemisin",
    "series": "The Broken Earth",
    "pages": 448,
    "wordcount": 138880,
    "type": "Fiction"
  },
  {
    "title": "The Gunslinger",
    "author": "Stephen King",
    "series": "The Dark Tower",
    "pages": 224,
    "wordcount": 55376,
    "type": "Fiction"
  },
  {
    "title": "The Drawing of the Three",
    "author": "Stephen King",
    "series": "The Dark Tower",
    "pages": 400,
    "wordcount": 125948,
    "type": "Fiction"
  },
  {
    "title": "The Waste Lands",
    "author": "Stephen King",
    "series": "The Dark Tower",
    "pages": 512,
    "wordcount": 173489,
    "type": "Fiction"
  },
  {
    "title": "Wizard and Glass",
    "author": "Stephen King",
    "series": "The Dark Tower",
    "pages": 787,
    "wordcount": 254691,
    "type": "Fiction"
  },
  {
    "title": "Wolves of the Calla",
    "author": "Stephen King",
    "series": "The Dark Tower",
    "pages": 714,
    "wordcount": 242776,
    "type": "Fiction"
  },
  {
    "title": "Song of Susannah",
    "author": "Stephen King",
    "series": "The Dark Tower",
    "pages": 432,
    "wordcount": 118221,
    "type": "Fiction"
  },
  {
    "title": "Borne",
    "author": "Jeff VanderMeer",
    "pages": 336,
    "wordcount": 104160,
    "type": "Fiction"
  },
  {
    "title": "The Inconvenient Indian",
    "author": "Thomas King",
    "pages": 272,
    "wordcount": 84320,
    "type": "Non-Fiction"
  },
  {
    "title": "Oathbringer",
    "author": "Brandon Sanderson",
    "series": "The Way of Kings",
    "pages": 1248,
    "wordcount": 450000,
    "type": "Fiction"
  },
  {
    "title": "Edgedancer",
    "author": "Brandon Sanderson",
    "series": "The Way of Kings",
    "pages": 272,
    "wordcount": 84320,
    "type": "Fiction"
  },
  {
    "title": "Death’s End",
    "author": "Cixin Liu",
    "series": "Remembrance of Earth’s Past",
    "pages": 608,
    "wordcount": 188480,
    "type": "Fiction"
  },
  {
    "title": "All the Birds in the Sky",
    "author": "Charlie Jane Anders",
    "pages": 320,
    "wordcount": 99200,
    "type": "Fiction"
  },
  {
    "title": "The Myth of the Strong Leader: Political Leadership in the Modern Age",
    "author": "Archie Brown",
    "pages": 480,
    "wordcount": 148800,
    "type": "Non-Fiction"
  },
  {
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "pages": 368,
    "wordcount": 114080,
    "type": "Non-Fiction"
  },
  {
    "title": "The Gene: An Intimate History",
    "author": "Siddartha Mukherjee",
    "pages": 608,
    "wordcount": 188480,
    "type": "Non-Fiction"
  },
  {
    "title": "Ted Talks: The Official TED Guide to Public Speaking",
    "author": "Chris J. Anderson",
    "pages": 288,
    "wordcount": 89280,
    "type": "Non-Fiction"
  },
  {
    "title": "LOOK: Looking Out, Looking In",
    "author": "Judith A. Rolls, Ronald B. Adler, Russel F. Proctor",
    "pages": 462,
    "wordcount": 143220,
    "type": "Non-Fiction"
  },
  {
    "title": "Strong Opinions",
    "author": "Vladimir Nabakov",
    "pages": 335,
    "wordcount": 114080,
    "type": "Non-Fiction"
  },
  {
    "title": "The Iron King",
    "author": "Maurice Druon",
    "series": "The Accursed Kings",
    "pages": 368,
    "wordcount": 114080,
    "type": "Fiction"
  },
  {
    "title": "The Strangled Queen",
    "author": "Maurice Druon",
    "series": "The Accursed Kings",
    "pages": 304,
    "wordcount": 94240,
    "type": "Fiction"
  },
  {
    "title": "The Dreamblood Duology",
    "author": "N.K. Jemisin",
    "pages": 960,
    "wordcount": 297600,
    "type": "Fiction"
  },
  {
    "title": "Seveneves",
    "author": "Neal Stephenson",
    "pages": 880,
    "wordcount": 272800,
    "type": "Fiction"
  },
  {
    "title": "How Not to Write a Novel: 200 Classic Mistakes and How to Avoid Them",
    "author": "Howard Mittelmark and Sandra Newman",
    "pages": 272,
    "wordcount": 84320,
    "type": "Non-Fiction"
  },
  {
    "title": "This Human: How to Be the Person Designing for Other People : Finding the Human in Human-Centred Design",
    "author": "Melis Senova",
    "pages": 224,
    "wordcount": 69440,
    "type": "Non-Fiction"
  },
  {
    "title": "The Collapsing Empire",
    "author": "John Scalzi",
    "pages": 333,
    "wordcount": 104160,
    "type": "Fiction"
  },
  {
    "title": "Artemis",
    "author": "Andy Weir",
    "pages": 320,
    "wordcount": 99200,
    "type": "Fiction"
  }
];

const authors = books.reduce((prev, cur) => {
  return (prev.indexOf(cur.author) < 0) ? prev.concat([cur.author]) : prev;
}, []);

const series = books.reduce((prev, cur) => {
  return (prev.indexOf(cur.series) < 0) ? prev.concat([cur.series]) : prev;
}, []);

const averageWordsPerPage = () => {
  let averages = [];
  books.map((book) => averages.push(book.wordcount / book.pages));
  const sum = averages.reduce((total, value) => total + value);
  return Math.round(sum / averages.length);
};

const totalWords = () => {
  return books.reduce((total, book) => total + book.wordcount, 0);
}

const totalPages = () => {
  return Math.round(totalWords / averageWordsPerPage(books));
}

const lowestWordCount = () => {
  const book = books.reduce((prev, curr) => prev.wordcount < curr.wordcount ? prev : curr);
  return book.wordcount;
}

const highestWordCount = () => {
  const book = books.reduce((prev, curr) => prev.wordcount < curr.wordcount ? prev : curr);
  return book.wordcount;
}

const numberOfPagesToRepresentBook = (wordcount) => {
  return Math.round((wordcount / averageWordsPerPage()) * reducingPercentage(1.5));
};

const reducingPercentage = (minimum = 1) => {
  return minimum / (totalWords(books) / lowestWordCount(books));
}

export {
  books,
  authors,
  series,
  averageWordsPerPage,
  totalWords,
  totalPages,
  lowestWordCount,
  highestWordCount,
  numberOfPagesToRepresentBook,
  reducingPercentage
};
