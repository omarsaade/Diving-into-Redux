import React from 'react';
import ReactDOM from 'react-dom/client';
//Provider huwe component
// Provide the Redux Store to React
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


