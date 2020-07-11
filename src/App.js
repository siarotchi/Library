import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Home from './pages/Home';
import StanYaro from './components/StanYaro/StanYaro';
import Shelves from './components/Shelves/Shelves';

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
              <Route path={'/'} exact component={Home} />
            </Switch>
            <Switch>
              <Route path={'/shelves'} exact component={Shelves} />
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
