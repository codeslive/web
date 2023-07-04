import React from 'react';
import ReactDOM from 'react-dom/client';
// 样式初始化
import "reset-css";
import App from './App.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
