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
        <a href="#" target="blank">
          <img
            src="https://lh3.googleusercontent.com/proxy/0ag4AciX5P6-3mxOR8AJ1ExKuPAgHwC-7cg88rThum-f11zChBiMHrF8k_BDBP7S2Vj2KjhTvgECMN9ciep4EdWHxleCWdgV2mp_eIHxyAm7ajNwA93PqQ"
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
