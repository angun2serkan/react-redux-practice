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
// react-redux / Provider - wraps app, connect - used in components
import {Provider} from "react-redux";


// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5,
}

//store
const store = createStore(reducer, initialStore);


function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
