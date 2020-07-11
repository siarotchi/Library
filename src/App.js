import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import StanYaro from './components/StanYaro/StanYaro';
import Shelves from './components/Shelves/Shelves';
import BooksList from './components/BooksList/BooksList';
import About from './components/About/About';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="appContainer" style={{ backgroundColor: props.appColor }}>
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

const mapStateToProps = (state) => ({
  appColor: state.app.appTheme,
});

export default connect(mapStateToProps)(App);
