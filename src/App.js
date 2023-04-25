import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { Provider } from "react-redux";
//initial store

const store = configureStore({
  reducer: reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

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
