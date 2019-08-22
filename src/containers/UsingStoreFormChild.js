import React from "react";
import useStoreForm from "../_hooks/useStoreForm";

export default function UsingStoreForm({ onSubmit }) {
  const { values, handleChange, handleSubmit } = useStoreForm(
    "LOGIN_FORM",
    onSubmit
  );
  const handleInputsChange = ({ target: { name, value } }) => {
    handleChange(name, value);
  };
  const handleCheckboxesChange = ({ target: { name, checked } }) => {
    handleChange(name, checked);
  };

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
