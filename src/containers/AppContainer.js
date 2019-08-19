import React from "react";
// import { useSelector } from "react-redux";
import useLocalUserInputForm from "../_hooks/useLocalUserInputForm";

export default function AppContainer() {
  // const appState = useSelector(state => state.app);
  const initialState = {
    username: "toto",
    password: "random"
  };
  const {
    values: formData,
    onChange: handleFormInputChange
  } = useLocalUserInputForm(initialState);
  console.log(formData, handleFormInputChange);
  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleFormInputChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleFormInputChange}
      />
      <br />
      <input type="submit" value="Submit!" />
    </form>
  );
}
