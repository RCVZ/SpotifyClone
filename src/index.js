import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";

import { MainContext } from './Context/MainContext';


// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }


ReactDOM.render(
  <BrowserRouter>
    <MainContext>
      <App />
    </MainContext>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
