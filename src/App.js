import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import StanYaro from './components/StanYaro/StanYaro';
import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <BrowserRouter>
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
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
