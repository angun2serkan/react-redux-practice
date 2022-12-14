import { DECREASE, INCREASE, CLEAR_CART, CHANGE_NAME } from "./actions";

//reducer
function reducer(state, action){
    if(action.type === CLEAR_CART){
        return{...state, cart:[]};
    }
    return state;
  }

export default reducer;