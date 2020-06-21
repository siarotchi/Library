import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Home from './pages/Home';
import StanYaro from './components/StanYaro/StanYaro';
import Filter from './components/Filter/Filter';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper" style={{ backgroundColor: props.appColor }}>
        <div className="appContainer">
          <Header />
          <div className="appContent">
            <Switch>
              <Route path={'/stanyaro'} exact component={StanYaro} />
            </Switch>
            <Switch>
              <Route path={'/list'} exact component={Home} />
            </Switch>
            <Switch>
              <Route path={'/review'} exact component={Filter} />
            </Switch>
            <Switch>
              <Route path={'/withApi'} exact component={Filter} />
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
