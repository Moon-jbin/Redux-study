// state
// ['코딩','점심 먹기'];
import {ADD_TODO} from './actions'


const initialSate = [];

export function todoApp(previousState = initialSate, action) {
  // 초기값을 설정해 주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if(action.type === ADD_TODO){
    return [...previousState, action.todo];
  }

  return previousState;
}