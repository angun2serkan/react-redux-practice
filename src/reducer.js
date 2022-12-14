import { DECREASE, INCREASE, RESET, CHANGE_NAME } from "./actions";

//reducer
function reducer(state, action){
    console.log({state, action});
    if(action.type === DECREASE){
      console.log("hey it actually worked");
      return {...state, count: state.count - 1};
    }
    if(action.type === INCREASE){
      console.log("hey it actually worked");
      return {...state, count: state.count + 1};
    }
    if(action.type === RESET){
      console.log("hey it actually worked");
      return {...state, count: 0};
    }
    if(action.type == CHANGE_NAME){
      return {...state, name:'Zeynep'}
    }
    return state;
  }

export default reducer;