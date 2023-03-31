import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { configureStore } from "redux";
//initial store
const initialStore = {
  count: 78,
};
//reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  }
  return state;
}

const store = configureStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
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
