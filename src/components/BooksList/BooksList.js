import React, { useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, List, Modal, notification } from 'antd/lib';
import s from './BooksList.module.css';
import Rates from '../Rates.js/Rates';
import Filter from '../Filter/Filter';
import { updateShelf, addNewComment } from '../../redux/actions/actions';
import { buttonDark, buttonLight, darkStyle, lightStyle } from '../../redux/reducers/constants';

const BooksList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [value, setValue] = useState('');

  const filteredBooks = useSelector((state) => state.app.filteredBooks);
  const usersMessages = useSelector((state) => state.app.users);
  const style = useSelector((state) => state.app.appTheme.lightTheme);

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const onChange = useCallback(({ target: { value } }) => setValue(value), []);

  const updateModalDetails = (item) => {
    setModalDetails(item);
    setModalVisible(true);
  };

  const addBookToShelf = (item) => {
    return dispatch(updateShelf(item));
  };
  const emptyPostNotification = () => {
    notification.info({
      message: `Attention`,
      description: 'You cant post empty string',
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault('');
    if (value) {
      dispatch(addNewComment(value));
      setValue('');
    } else emptyPostNotification();
  };

  return (
    <div className={s.booksListcontainer} style={style ? lightStyle : darkStyle}>
      <Filter />
      <List
        grid={{
          gutter: 30,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={filteredBooks}
        renderItem={(item, id) => (
          <List.Item>
            <Card
              bodyStyle={{ padding: '0' }}
              key={id}
              cover={
                <div className={s.img__wrap}>
                  <img className={s} alt="cardImg" src={item.url} id={item.id} key={id} />
                  <div className={s.img__description} onClick={() => updateModalDetails(item)}>
                    <span className={s.imgHoverLeft}>
                      <span>
                        <img
                          className={s.imgHover}
                          viewBox="0 0 48 48"
                          alt="imgHover"
                          src="https://i.ibb.co/X26JdDg/heart-Empty-Bg.png"
                          id={item.id}
                          key={id}
                        />
                      </span>
                      <span>1.2k</span>
                    </span>
                    <span>
                      <span>
                        <img
                          className={s.imgHover}
                          viewBox="0 0 48 48"
                          alt="imgHover"
                          src="https://i.ibb.co/kcYbtvR/Instagram-UI-comment-512.png"
                          id={item.id}
                          key={id}
                        />
                      </span>
                      <span>2.022</span>
                    </span>
                  </div>
                </div>
              }
            ></Card>
            <div>
              <button
                type="button"
                className={s.bookBtn}
                style={style ? buttonLight : buttonDark}
                onClick={() => addBookToShelf(item)}
              >
                Add to Shelf
              </button>
            </div>
          </List.Item>
        )}
      />
      <Modal
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={816}
        bodyStyle={{ padding: '0' }}
        closable={false}
      >
        <div className={s.modalContainer}>
          <img className={s.modalImg} alt="modalImg" src={modalDetails.url} />
          <div className={s.modalContext}>
            <div className={s.modalHeader}>
            <span>Rate book</span>
              <Rates />
              <span type="primary" onClick={() => setModalVisible2(true)}>
                <img
                  className={s.burgermenu}
                  src="https://static.thenounproject.com/png/756733-200.png"
                  alt="burgermenu"
                />
              </span>
            </div>
            <div className={s.modalComents}>
              {usersMessages.map((u, index) => (
                <div key={index}>
                  <span>
                    <div className={s.modalUserCard}>
                      <span>
                        <img className={s.avatar} alt="cardImg" src={u.url} key={u.id} />
                      </span>
                      <span>
                        <span className={s.flex}>
                          <span>
                            <b>{u.name}</b>
                            <p>{u.message}</p>
                          </span>
                          <svg
                            aria-label="Like"
                            className={s.svgLikeHeart}
                            fill="#8e8e8e"
                            height="12"
                            viewBox="0 0 48 48"
                            width="12"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </span>
                </div>
              ))}
            </div>

            <div className={s.modalLikes}>
              <span className={s.flex}>
                <div>
                  <svg aria-label="Like" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </div>
              </span>
              <div className={s.modalLikesCount}>
                <b>418 likes</b>
              </div>
              <form onSubmit={handleSubmit} className={s.modalFooter}>
                <textarea ref={inputRef} type="text" placeholder="Add a comment..." onChange={onChange} value={value} />
                <button type="submit" className={s.postBtn}>
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
        <Modal
          centered
          visible={modalVisible2}
          onOk={() => setModalVisible2(false)}
          onCancel={() => setModalVisible2(false)}
          footer={null}
          closable={false}
          width={250}
          height={250}
          bodyStyle={{ padding: '0' }}
          zIndex={2000}
        >
          <div className={s.secondModalContainer}>
            <div className={s.secondModalWrapper}>
              <button className={s.secondModalBtn}>Share</button>
              <button className={s.secondModalBtn}>Copy Link</button>
              <button className={s.secondModalBtn}>Do smth</button>
              <button className={s.secondModalBtn}>Do smth</button>
              <button className={s.secondModalBtn}>Do smth</button>
            </div>
          </div>
        </Modal>
      </Modal>
    </div>
  );
};

export default BooksList;
