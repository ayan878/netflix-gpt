import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//at the time of deveopment everthing render two time just bcz of Strict mode.
// if we keeping strict mode it just happend twice in your local when developing app but if you will make a build for production. it will not happend twice 

//Why it happend twice
// Ans: React doest extra rendering to check for some incosistancy between your calls. it means it is good things