import React from 'react';
import s from './Shelves.module.css';
import { List } from 'antd/lib';
import Shelf from '../Shelf/Shelf';
import { connect } from 'react-redux';
import { addNewShelf } from '../../redux/actions/actions';

const Shelves = (props) => {
  const addShelf = () => {
    const shelfName = window.prompt('Add new shelf name');
    props.addNewShelf(shelfName);
  };

  return (
    <div className={s.shelvesWrapper}>
      <div className={s.shelfBtn}>
        <button onClick={addShelf}>Add Shelf</button>
      </div>
      <List
        dataSource={props.shelves}
        renderItem={(item, id) => {
          // if (item.books.length) {
          return (
            <List.Item key={id}>
              <div className={s.shelvesContainer}>
                <h1
                  style={{
                    width: '100%',
                    paddingLeft: '1%',
                  }}
                >
                  {item.category}
                </h1>
                <Shelf key={id} books={item.books} categoryId={item.id} />
              </div>
            </List.Item>
          );
          // }
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { shelves: state.app.shelves };
};

const mapDispatchToProps = { addNewShelf };

export default connect(mapStateToProps, mapDispatchToProps)(Shelves);
