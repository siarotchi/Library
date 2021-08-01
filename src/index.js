import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/store';

ReactDOM.render(
  <Provider store={Store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
