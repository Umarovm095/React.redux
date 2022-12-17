import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const intialState = 0

const reducer = (state = intialState, action) =>{
  if(action.type == 'plus'){
    return state + 1
  }

  if(action.type == 'minus'){
    return state - 1
  }

  if(action.type == 'reset'){
    return 0
  }

  return 0
}


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <App />
  </Provider>
);