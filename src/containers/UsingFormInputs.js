import React from "react";
import { useDispatch } from "react-redux";
import useLocalUserInputForm from "../_hooks/useLocalUserInputForm";

export default function UsingFormInputs() {
  const dispatch = useDispatch();
  const initialState = {
    username: "Sophia",
    password: "random",
    rememberMe: false
  };
  const submit = values => {
    console.log(values);
    dispatch({
      type: "SOME_ACTION",
      payload: values
    });
  };
  const {
    values,
    onChange: handleInputsChange,
    onCheckboxChange: handleCheckboxesChange,
    onSubmit
  } = useLocalUserInputForm(initialState, submit);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleInputsChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleInputsChange}
      />
      <br />
      <input
        type="checkbox"
        name="rememberMe"
        value={values.rememberMe}
        onChange={handleCheckboxesChange}
      />{" "}
      Remember me
      <br />
      <input type="submit" value="Submit!" />
    </form>
  );
}
