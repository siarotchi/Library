import React from 'react';
import s from '../Shelf/Shelf.module.css';
import { deleteBookFromShelf } from '../../redux/actions/actions';
import { connect, useSelector } from 'react-redux';

const Shelf = (props) => {
  return props.books.map(({ url, id }) => (
    <div className={s.bookOnShelfContainer} key={id}>
      <img className={s.booksOnShelf} alt="cardImg" src={url} key={id} />
      <button className={s.deletBtn} onClick={() => props.deleteBookFromShelf(id, props.categoryId)}>
        Delete
      </button>
    </div>
  ));
};

const mapDispatchToProps = { deleteBookFromShelf };

export default connect(null, mapDispatchToProps)(Shelf);
