import React from 'react';
import s from './About.module.css';

const About = () => (
  <div className={s.about}>
    <h1>Library: React App</h1>
    <h3>What was used:</h3>
    <div className={s.aboutContext}>
      <p>Redux</p>
      <p>Neumorphism</p>
      <p>Ant Design</p>
      <p>Module.css</p>
      <p>React Router</p>
    </div>

    <div class="row">
      <input id="button-2" name="button-2" type="checkbox"></input>
      <label for="button-2" class="button button-square button-border">
        ✔️
      </label>
    </div>
  </div>
);

export default About;
