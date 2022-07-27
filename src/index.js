import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// ReactDOM.render(<App subject="Clarice" />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App subject="Clarice" />
  </React.StrictMode>
);
