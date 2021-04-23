import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import LogRocket from 'logrocket';
// LogRocket.init('<APP LOGIN>', {
//   dom: {
//     baseHref: 'http://cdn.enlinx.com/',
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
