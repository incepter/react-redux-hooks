import React from "react";
import useUserInputStoreForm from "../_hooks/useUserInputStoreForm";

export default function UsingStoreForm({ onSubmit }) {
  const {
    values,
    onChange: handleInputsChange,
    onCheckboxChange: handleCheckboxesChange,
    onSubmit: handleSubmit
  } = useUserInputStoreForm("LOGIN_FORM", onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleInputsChange}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleInputsChange}
      />
      <br />
      <label htmlFor="rememberMe">Remember me </label>
      <input
        type="checkbox"
        name="rememberMe"
        value={values.rememberMe}
        onChange={handleCheckboxesChange}
      />
      <br />
      <button type="submit">Submit!</button>
    </form>
  );
}
