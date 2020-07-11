import React from 'react';

const ActionBtn = ({ task, doneTask, deleteTask }) => (
  <div className="action-btn">
    {!task.done ? (
      <button type="button" className={s.bookBtn} onClick={() => this.addBookToShelf(item)}>
        Add to Shelf
      </button>
    ) : (
      //   <button onClick={doneTask} type="button" className="btn btn-outline-success btn-lg">
      //     &#9998;
      //   </button>
      <button type="button" className={s.bookBtn} onClick={() => this.addBookToShelf(item)}>
        Added
      </button>
      //   <button onClick={deleteTask} type="button" className="btn btn-outline-danger btn-lg">
      //     &#10006;
      //   </button>
    )}
  </div>
);

export default ActionBtn;
