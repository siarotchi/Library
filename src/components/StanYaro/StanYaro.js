import React from 'react';
import './StanYaro.scss';
import SocialButtonsPage from './SocialButtons';

const StanYaro = () => {
  return (
    <div className="home-container">
      <header className="masthead">
        <p className="masthead-intro">Hi I'm</p>
        <h1 className="masthead-heading">Stan!</h1>
      </header>
      <hr />
      <hr />

      <section className="introduction-section">
        <h1>Introduction</h1>
        <p>I am a Front-End developer and this is my Project.</p>
        <p>
          I have 10 years of experience in accounting and statistics of sales, database management. I'm hardworking,
          serious, responsible and reliable employee. Know how to manage my time and to distribute tasks by complexity
          and importance. I'm prefer structured work with clear objectives and very happy when everything is done
          correctly and on time. Have no problems with the routine and the large volume of work. If i'm seting goals, i
          can donate a lot to achieve it. Thanks to my open manner of communication, it is easy for me to make new
          acquaintances. I am a good and reliable friend, always ready to help at the right time.
        </p>
      </section>

      <section className="domain-section">
        <h1>Domain Experience</h1>
        <h2>Accounting, Business</h2>
        <p>
          For 8 years i lead records and statistics of sales where acquired analytical thinking, the ability to work
          calmly with a large amount of information and tasks. The ability to sort and distribute tasks has become the
          basis for successful work. And, of course, i'm get into the habit of meeting the deadlines because of the
          specifics of work all reports must be submitted on time monthly.
        </p>

        <h2>Managing, Retail network</h2>
        <p>
          Working on a network, i began to communicate with people much more, acquiring new communication skills. Then i
          consolidate my ability to solve problems, because there were many more of them on the network. The ability to
          find solutions by any means without fear of new actions. When i became a Senior operator, i'm acquired a new
          mentoring skill. I've trained the operator from scratch until my replacement, which gave me experience and
          understanding of the complexity of the training process. And teamwork, where i learned to divide work by
          complexity and help to resolve problems to covering each other’s backs.
        </p>
        <h2>IT Development, Self Education</h2>
        <p>
          Starting a new career growth in a new industry, i broke my usual way of life for a new goal. I got out of my
          comfort zone, which brought me a lot of stress, but added more fuel to my engine to continue learning new
          skills and abilities. This is a new limitless world that allows you to constantly develop your skills and
          become a better person than you were yesterday.
        </p>
      </section>

      <section className="core-section">
        <h1>Core Technical Skills</h1>
        <p>
          &#10003; <u>Languages &amp; Technologies, Databases:</u> Html5, Css3, JavaScript, React, Redux, Git, Grid,
          FlexBox, ES6, OOP, Microsoft Office.
        </p>
        <p>
          &#10003; <u>Tools:</u> Visual Studio Code, Bootstrap, Material UI, Ant Design, jQuery, Npm, Sass, Gulp, Chrome
          DevTools.
        </p>
        <p>
          &#10003; <u>Techniques &amp; Methods:</u> Agile Methodologies, SCRUM.
        </p>
      </section>

      <section className="questions-section">
        <h1>More About Me</h1>
        <h2>What are your favorite hobbies?</h2>
        <p>My favorite hobbies are volleyball, guitar and coding.</p>
        <h2>Why do you want to be a Front-End developer?</h2>
        <p>
          Simple answer I loved it. I loved the thrill. I love to see my imagination come to life. I choose to be a
          Front-End developer to bring my ideas to life and help others see what I think a better world looks like.
        </p>
        <h2>What's your dream job?</h2>
        <p>
          I want to surround myself by those who are passionate about moving the needle forward. A collaborative,
          thought-provoking, honest, humble and enthusiastic environment where innovation can exist.
        </p>
      </section>

      <footer className="content-footer">
        <p>Say hi to me on these social networks:</p>
        <SocialButtonsPage />
        <p style={{ textAlign: 'left', margin: '40px 0 0 10px' }}>
          &#9400; 2020 by Stanislav Iarotchi. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default StanYaro;
