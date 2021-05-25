import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxThunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import App from './App';
//import ReduxThunk from 'redux-thunk'


const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
