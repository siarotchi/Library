import React from 'react';
import 'antd/dist/antd.css';
import BooksList from '../components/BooksList/BooksList';

const Home = () => {
  return (
    <div className="homePageContainer">
      <BooksList />
    </div>
  );
};

export default Home;
