import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./redux/noteReducer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authReducer from "./redux/authReducer";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    auth: authReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
