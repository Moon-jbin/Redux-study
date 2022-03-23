import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {addTodo} from "./redux/actions";



const unsubscribe = store.subscribe(()=>{
  // 스토어의 상태가 변경되면 이 함수가 호출된다.
  // 마치 state가 변경되면 라이이프 사이클 도는것 처럼..?
  // 스토어의 변경사항이 있는것을 구독
  console.log(store.getState() )    // 현재 state 값이 나옴
});  

// console.log(store)
// dispatch를 사용해 액션을 던진다.
store.dispatch(addTodo('coding'));
// console.log(store.getState());
store.dispatch(addTodo('read book'));
store.dispatch(addTodo('eat'));

unsubscribe()

store.dispatch(addTodo('coding 2'));
store.dispatch(addTodo('read book 2'));
store.dispatch(addTodo('eat 2'));


unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
