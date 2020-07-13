import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import StanYaro from './components/StanYaro/StanYaro';
import Shelves from './components/Shelves/Shelves';
import BooksList from './components/BooksList/BooksList';
import About from './components/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="appContainer">
          <Header />
          <div className="appContent">
            <Switch>
              <Route path={'/stanyaro'} exact component={StanYaro} />
            </Switch>
            <Switch>
              <Route path={'/'} exact component={BooksList} />
            </Switch>
            <Switch>
              <Route path={'/shelves'} exact component={Shelves} />
            </Switch>
            <Switch>
              <Route path={'/about'} exact component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
