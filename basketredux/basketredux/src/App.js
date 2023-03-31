import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { configureStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
//initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

const store = configureStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
