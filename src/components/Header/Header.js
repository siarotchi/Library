import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { connect } from 'react-redux';
import { switchTheme } from '../../redux/actions/actions';

const Header = ({ dispatch, style }) => {
  const changeAppTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <header className={s.headerAppContainer} style={style}>
      <div className={s.headerAppLeft} style={style}>
        <span>
          <NavLink to="/stanyaro">
            <h1>Stanislav Iarotchi</h1>
          </NavLink>
        </span>
      </div>

      <div className={s.headerAppRight} style={style}>
        <nav>
          <ul id={s.menu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shelves">Shelves</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.switcherTheme}>
        <input type="checkbox" id="switch" onClick={changeAppTheme} />
        <label htmlFor="switch">Toggle</label>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  style: state.app.appTheme.style,
});

export default connect(mapStateToProps)(Header);
