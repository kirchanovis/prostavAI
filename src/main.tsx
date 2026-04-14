import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Ant Design base styles
import 'antd/dist/reset.css';
import './styles/typography.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
