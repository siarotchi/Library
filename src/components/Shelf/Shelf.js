import React from 'react';
import s from '../Shelf/Shelf.module.css';

const Shelf = ({ books }) => {
  return (
    <div>
      {books.map(({ url, id }) => (
        <img className={s.booksOnShelf} alt="cardImg" src={url} key={id} />
        //    <button className={s.btnOnHover}>11111111</button>
      ))}
    </div>
  );
};

export default Shelf;
