import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store = {store}>
    <App text= 'test'/>
  </Provider>,
  document.getElementById('root')
);


