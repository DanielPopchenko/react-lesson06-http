import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './base.css';

// ! Метод render не поддерживается, поэтому юзаем новый метод createRoot()!
// ! а render() юзаем на результате работы createRoot()

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
