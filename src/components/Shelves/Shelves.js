import React, { Component } from 'react';
import s from './Shelves.module.css';
import { List, Button } from 'antd/lib';
import Shelf from '../Shelf/Shelf';

class Shelves extends Component {
  state = {
    shelves: [],
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.books.length !== this.props.books.length) {
      const fantasyBooks = this.props.books.filter(({ category }) => category === 'Fantasy');
      const artBooks = this.props.books.filter(({ category }) => category === 'Art');
      const romanceBooks = this.props.books.filter(({ category }) => category === 'Romance');
      this.setState({
        shelves: [
          { id: 1, category: 'Fantasy', books: fantasyBooks },
          { id: 2, category: 'Art', books: artBooks },
          { id: 3, category: 'Romance', books: romanceBooks },
        ],
      });
    }
  };

  render() {
    const { shelves } = this.state;

    return (
      <div className={s.shelvesWrapper}>
        <List
          dataSource={shelves}
          renderItem={(item, id) => (
            <>
              <List.Item key={id}>
                <div className={s.shelvesContainer}>
                  <h1
                    style={{
                      width: '100%',
                    }}
                  >
                    {item.category}
                  </h1>
                  <Shelf key={id} books={item.books} />
                </div>
              </List.Item>
            </>
          )}
        />
        <div className={s.shelfBtn}>
          <Button
            style={{
              borderColor: '#91d5ff',
            }}
          >
            Add Shelf
          </Button>
        </div>
      </div>
    );
  }
}

export default Shelves;
