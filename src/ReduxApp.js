import React from "react";
import produce from "immer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { formsReducer } from "./_forms";

const initialState = {
  app: {
    attribute: "a value"
  }
};

export default function ReduxApp({ children }) {
  const store = initStore();
  return <Provider store={store}>{children}</Provider>;
}

function initStore() {
  return createStore(getReducers(), initialState);
}

function getReducers() {
  return combineReducers({
    app: appReducer,
    forms: formsReducer
  });
}

export const appReducer = produce((draft, action) => {
  switch (action.type) {
    case "SET_CONFIG":
      draft.config = action.payload;
      break;

    default:
      break;
  }
}, {});
