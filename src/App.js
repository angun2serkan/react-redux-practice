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
// import { DECREASE, INCREASE } from "./actions";
import reducer from './reducer';
import { DECREASE, INCREASE, RESET, CHANGE_NAME } from "./actions";


// initial store
const initialStore = {
  count: 5,
  name: 'serkan'
}

//store
const store = createStore(reducer, initialStore);
store.dispatch({type:RESET});
store.dispatch({type: DECREASE});
store.dispatch({type:INCREASE});
store.dispatch({type:CHANGE_NAME});
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
