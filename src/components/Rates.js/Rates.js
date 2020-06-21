import React from 'react';
import s from './Rates.module.css';

const Rates = () => {
  return (
    <div className={s.rate}>
      <input type="radio" id="star5" className="rate" value="5" />
      <label htmlFor="star5" title="text">
        5 stars
      </label>
      <input type="radio" id="star4" className="rate" value="4" />
      <label htmlFor="star4" title="text">
        4 stars
      </label>
      <input type="radio" id="star3" className="rate" value="3" />
      <label htmlFor="star3" title="text">
        3 stars
      </label>
      <input type="radio" id="star2" className="rate" value="2" />
      <label htmlFor="star2" title="text">
        2 stars
      </label>
      <input type="radio" id="star1" className="rate" value="1" />
      <label htmlFor="star1" title="text">
        1 star
      </label>
    </div>
  );
};

export default Rates;
