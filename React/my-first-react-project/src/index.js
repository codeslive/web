import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/init.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 手写useState 开启
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function render () {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }

// render();

// window.render = render;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

