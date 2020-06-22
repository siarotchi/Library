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
        <a href="https://www.goparrot.ai/" target="blank">
          <img
            src="https://scontent.fkiv5-1.fna.fbcdn.net/v/t1.0-9/92244382_918490648585708_6689192520187904000_n.png?_nc_cat=105&_nc_sid=85a577&_nc_oc=AQmNwY5Sy2_e-6sH9LK7S_RWHKVBcW1vgr4A9ktda-UgwlHHr0EQnUPZzcBKz5UAU8c&_nc_ht=scontent.fkiv5-1.fna&oh=5f43d90f72e8fc2a9c1d552daa535a31&oe=5F0F33F0"
            alt="logo"
          ></img>
        </a>

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
              <NavLink activeClassName={s.active} to="/list">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={s.active} to="/filter">
                Filter Comp
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

// export default Header;
export default connect(mapStateToProps)(Header);
