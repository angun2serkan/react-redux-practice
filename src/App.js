import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// state - old state / state before update
// action - what happened / what update


import  {createStore} from 'redux';

// initial store
const initialStore = {
  count: 5,
  name: 'serkan'
}

//reducer
function reducer(state, action){
  console.log({state, action});
  if(action.type === "DECREASE"){
    console.log("hey it actually worked");
    return {...state, count: state.count - 1};
  }
  if(action.type === "INCREASE"){
    console.log("hey it actually worked");
    return {...state, count: state.count + 1};
  }
  if(action.type === "RESET"){
    console.log("hey it actually worked");
    return {...state, count: 0};
  }
  if(action.type == 'CHANGE_NAME'){
    return {...state, name:'Zeynep'}
  }
  return state;
}

//store
const store = createStore(reducer, initialStore);
store.dispatch({type:'RESET'});
store.dispatch({type:'DECREASE'});
store.dispatch({type:'INCREASE'});
store.dispatch({type:'CHANGE_NAME'});
console.log(store.getState());


function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
