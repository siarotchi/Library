import React from 'react';
import s from './About.module.css';
import { darkStyle, lightStyle } from '../../redux/reducers/constants';
import { useSelector } from 'react-redux';

const About = () => {
  const style = useSelector((state) => state.app.appTheme.lightTheme);

  return (
    <div className={s.about} style={style ? lightStyle : darkStyle}>
      <h1>Library: React App</h1>
      <h3>What was used:</h3>
      <div className={s.aboutContext} style={style ? lightStyle : darkStyle}>
        <p>Redux</p>
        <p>Neumorphism</p>
        <p>Ant Design</p>
        <p>Module.css</p>
        <p>React Router</p>
      </div>

      <div class="row">
        <input id="button-2" name="button-2" type="checkbox"></input>
        <label style={style ? lightStyle : darkStyle} for="button-2" class="button button-square button-border">
          ✔️
        </label>
      </div>
    </div>
  );
};

export default About;
