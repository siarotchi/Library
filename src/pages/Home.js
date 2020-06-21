import React from 'react';
import 'antd/dist/antd.css';
import BooksList from '../components/BooksList/BooksList';
import Shelves from '../components/Shelves/Shelves';

const Home = () => {
  return (
    <div className="homePageContainer">
      <BooksList />
      <Shelves />
    </div>
  );
};

export default Home;
