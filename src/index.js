import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <App />
</Provider>,
  </React.StrictMode>
);

reportWebVitals();

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'
// import { store } from './redux/store'
// import { Provider } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );
