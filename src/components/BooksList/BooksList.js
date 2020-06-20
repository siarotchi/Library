import React, { Component, useState } from 'react';
import { Card, List, Modal, Button } from 'antd/lib';
import s from './BooksList.module.css';
import Rates from '../Rates.js/Rates';
import Filter from '../Filter/Filter';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          url: 'https://covers.openlibrary.org/b/id/270628-L.jpg',
          category: 'Fantasy',
          id: 1,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/8236963-L.jpg',
          category: 'Art',
          id: 2,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/4898540-L.jpg',
          category: 'Art',
          id: 3,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/2238081-L.jpg',
          category: 'Art',
          id: 4,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/9326621-L.jpg',
          category: 'Fantasy',
          id: 5,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/8474036-L.jpg',
          category: 'Art',
          id: 6,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/10082428-L.jpg',
          category: 'Fantasy',
          id: 7,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/10194302-L.jpg',
          category: 'Fantasy',
          id: 8,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/9342647-L.jpg',
          category: 'Romance',
          id: 9,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/5048643-L.jpg',
          category: 'Romance',
          id: 10,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/9278292-L.jpg',
          category: 'Romance',
          id: 11,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/8236992-L.jpg',
          category: 'Art',
          id: 12,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/2238306-L.jpg',
          category: 'Art',
          id: 13,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/8266542-L.jpg',
          category: 'Fantasy',
          id: 14,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
        {
          url: 'https://covers.openlibrary.org/w/id/4703873-L.jpg',
          category: 'Art',
          id: 15,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed. Vulputate eu scelerisque felis imperdiet. Porta nibh venenatis cras sed. Egestas erat imperdiet sed euismod nisi porta lorem. Leo integer malesuada nunc vel risus commodo.',
        },
      ],
      users: [
        {
          url: 'https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg',
          name: 'JavaScrip',
          message: "I am your's father! Come to the dark side!",
        },
        {
          url: 'https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg',
          name: 'React',
          message: 'To the moon!',
        },
        {
          url: 'https://www.thelogomix.com/files/imagecache/v3-logo-detail/Nike.jpg',
          name: 'Typescript',
          message: 'Where are my types!?',
        },
      ],
      modalVisible: false,
      modal2Visible: false,
      imageUrl: '',
      shelf: [],
    };
  }

  setModalVisible = (modalVisible, imageUrl) => {
    this.setState({ modalVisible, imageUrl });
    const element = document.querySelector('body');
    modalVisible ? element.classList.add('hideScroll') : element.classList.remove('hideScroll');
  };

  setModal2Visible = (modal2Visible) => {
    this.setState({ modal2Visible });
  };

  render() {
    const { books, users } = this.state;

    return (
      <div className={s.booksListcontainer}>
        <Filter />
        <List
          grid={{
            gutter: 30,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 5,
          }}
          dataSource={books}
          renderItem={(item, id) => (
            <List.Item>
              <Card
                bodyStyle={{ padding: '0' }}
                key={id}
                cover={
                  <div className={s.img__wrap}>
                    <img className={s} alt="cardImg" src={item.url} id={item.id} key={id} />
                    <div className={s.img__description} onClick={() => this.setModalVisible(true, item.url)}>
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
              <div className={s.bookBtn}>
                <Button style={{ borderColor: '#91d5ff', width: '100%' }} onClick={() => this.props.getBook(item)}>
                  Add to Shelf
                </Button>
              </div>
            </List.Item>
          )}
        />
        <Modal
          centered
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          footer={null}
          width={816}
          bodyStyle={{ padding: '0' }}
          closable={false}
        >
          <div className={s.modalContainer}>
            <img className={s.modalImg} alt="modalImg" src={this.state.imageUrl} />
            <div className={s.modalContext}>
              <div className={s.modalComents}>
                <div className={s.modalHeader}>
                  <span>Rate book</span>
                  <Rates />
                  <span type="primary" onClick={() => this.setModal2Visible(true)}>
                    <img
                      className={s.burgermenu}
                      src="https://static.thenounproject.com/png/756733-200.png"
                      alt="burgermenu"
                    />
                  </span>
                </div>

                {users.map((u, index) => (
                  <div key={index}>
                    <span>
                      <div className={s.modalUserCard}>
                        <span>
                          <img className={s.avatar} alt="cardImg" src={u.url} key={u.id} />
                        </span>
                        <span>
                          <span className={s.flex}>
                            <span>
                              <b>{u.name}</b> &nbsp; {u.message}
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
                          <p>1d &nbsp; 1432 likes &nbsp; Reply</p>
                          <a src="#">---- View replies(68)</a>
                        </span>
                      </div>
                    </span>
                  </div>
                ))}
              </div>

              <hr></hr>

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
                <div className={s.modalFooter}>
                  <textarea type="text" placeholder="Add a comment..." />
                  <button type="submit" className={s.postBtn}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal
            centered
            visible={this.state.modal2Visible}
            onOk={() => this.setModal2Visible(false)}
            onCancel={() => this.setModal2Visible(false)}
            footer={null}
            closable={false}
            width={400}
            height={290}
            bodyStyle={{ padding: '0', borderRadius: '14px' }}
            zIndex={2000}
          >
            <div className={s.secondModalContainer}>
              <div className={s.secondModalWrapper}>
                <button className={s.secondModalBtn}>
                  <b style={{ color: 'red' }}>Report Inappropriate</b>
                </button>
                <button className={s.secondModalBtn}>Go to post</button>
                <button className={s.secondModalBtn}>Share</button>
                <button className={s.secondModalBtn}>Copy Link</button>
                <button className={s.secondModalBtn}>Emded</button>
                <button className={s.secondModalBtn}>Cancel</button>
              </div>
            </div>
          </Modal>
        </Modal>
      </div>
    );
  }
}

export default BooksList;