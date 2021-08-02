import React from 'react';
import s from './About.module.css';
import { darkStyle, lightStyle } from '../../redux/reducers/constants';
import { useSelector } from 'react-redux';

const About = () => {
  const styleTheme = useSelector((state) => state.app.appTheme.lightTheme);

  return (
    <div className={s.about} style={styleTheme ? lightStyle : darkStyle}>
      <h1>Library: React App</h1>
      <h3>What was used:</h3>
      <div className={s.aboutContext} style={styleTheme ? lightStyle : darkStyle}>
        <p>Redux</p>
        <p>Neumorphism</p>
        <p>Ant Design</p>
        <p>Module.css</p>
        <p>React Router</p>
      </div>

      <div className="row">
        <input onClick={() => window.initsnow()} id="button-2" name="button-2" type="checkbox"></input>
        <label style={styleTheme ? lightStyle : darkStyle} htmlFor="button-2" className="button button-square button-border">
          ❄
        </label>
      </div>
    </div>
  );
};

export default About;
