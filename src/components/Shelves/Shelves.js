import React from 'react';
import s from './Shelves.module.css';
import { List } from 'antd/lib';
import Shelf from '../Shelf/Shelf';
import { useSelector, useDispatch } from 'react-redux';
import { addNewShelf } from '../../redux/actions/actions';
import { buttonDark, buttonLight, darkStyle, lightStyle } from '../../redux/reducers/constants';

const Shelves = () => {
  const shelves = useSelector((state) => state.app.shelves);
  const style = useSelector((state) => state.app.appTheme.lightTheme);
  const dispatch = useDispatch();

  const addShelf = () => {
    const shelfName = window.prompt('Add new shelf name');
    dispatch(addNewShelf(shelfName));
  };

  return (
    <div className={s.shelvesWrapper} style={style ? lightStyle : darkStyle}>
      <div className={s.shelfBtn}>
        <button onClick={addShelf} style={style ? buttonLight : buttonDark}>
          Add Shelf
        </button>
      </div>
      <List
        dataSource={shelves}
        renderItem={(item, id) => {
          return (
            <List.Item key={id}>
              <div className={s.shelvesContainer} style={style ? lightStyle : darkStyle}>
                <h1>{item.category}</h1>
                <Shelf key={id} books={item.books} categoryId={item.id} />
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default Shelves;
