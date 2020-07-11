import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { connect } from 'react-redux';
import { switchTheme } from '../../redux/actions/actions';

const Header = ({ dispatch }) => {
  const changeAppTheme = () => {
    dispatch(switchTheme('green'));
  };

  return (
    <header className={s.headerAppContainer}>
      <div className={s.headerAppLeft}>
        <span>
          <NavLink to="/stanyaro">
            <h1>Stanislav Iarotchi</h1>
          </NavLink>
        </span>
      </div>

      <div className={s.headerAppRight}>
        <nav>
          <ul id={s.menu}>
            <li>
              <NavLink activeClassName={s.active} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={s.active} to="/shelves">
                Shelves
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={s.active} to="/shelves">
                About
              </NavLink>
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
  appColor: state.app.appTheme,
});

export default connect(mapStateToProps)(Header);
