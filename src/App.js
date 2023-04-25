import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
});

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
