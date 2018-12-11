import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from "react-router-dom";

import { updatePlayList, updatePlaylistName } from './reducers';
import { searchTracks, searchChange } from './Components/SearchBar/reducers';

const logger = createLogger();

const rootReducers = combineReducers({ searchTracks, updatePlayList, updatePlaylistName, searchChange });

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />      
    </BrowserRouter>    
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
