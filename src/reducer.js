import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

//reducer
function reducer(state, action){
  if(action.type === CLEAR_CART){
    return{...state, cart:[]};
  }
  if(action.type === DECREASE){
    console.log("you decreased amount");
  }
  if(action.type === INCREASE){
    console.log("you increase amount");
  }
  if(action.type === REMOVE){
    return{
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
    };
  }
    return state;
  }

export default reducer;