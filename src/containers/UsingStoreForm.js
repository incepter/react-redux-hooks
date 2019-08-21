import React from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../_forms";
import UsingStoreFormChild from "./UsingStoreFormChild";

export default function UsingStoreForm() {
  const dispatch = useDispatch();
  const initialState = {
    username: "Rockey",
    password: "random",
    rememberMe: false
  };
  dispatch(
    addForm({
      key: "LOGIN_FORM",
      initialState
    }),
    initialState
  );
  const onSubmit = values => {
    console.log(values);
    dispatch({
      type: "SOME_ACTION",
      payload: values
    });
  };

  return <UsingStoreFormChild onSubmit={onSubmit} />;
}
