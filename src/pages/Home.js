import React, { Component } from 'react';
import 'antd/dist/antd.css';
import BooksList from '../components/BooksList/BooksList';
import Shelves from '../components/Shelves/Shelves';

class Home extends Component {
  state = {
    books: [],
  };

  getBook = (data) => {
    const { books } = this.state;
    const bookExist = books.find(({ id }) => id === data.id);
    return !bookExist ? this.setState({ books: [...this.state.books, data] }) : null;
  };

  render() {
    const { books } = this.state;
    return (
      <div className="homePageContainer">
        <BooksList getBook={this.getBook} />
        <Shelves books={books} />
      </div>
    );
  }
}

export default Home;
