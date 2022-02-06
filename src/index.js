import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Collapse } from 'bootstrap';



let alertValue = true;

function reducer2(state = alertValue, action) {
  if (action.type === '모달창닫기') {
    state = false;
    return state;
  }


  return state
}




let basicValue = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '멋진신발2', quan: 3 },
];

function reducer(state = basicValue, action) {

  if (action.type === '항목추가') {

    let found = state.findIndex((a)=>{ return a.id === action.payload.id})

    if( found >= 0){

      let copy = [...state];
      copy[found].quan++;
      return copy;

    } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }


  } else if (action.type === '수량증가') {
    let copy = [...state]
    copy[action.payload].quan++;
    return copy
  } else if (action.type === '수량감소') {

    let copy = [...state]
    if (copy[action.payload].quan > 0) {
      copy[action.payload].quan--;
    }
    return copy


    // let copy = [...state]
    // copy[0].quan--;
    // return copy
  } else {
    return state
  }
};

let store = createStore(combineReducers({ reducer, reducer2 }))


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
