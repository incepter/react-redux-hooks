import { useState, useCallback } from "react";

export default function useLocalUserInputForm(initialState = {}) {
  const [values, setValues] = useState(initialState);

  const onChange = useCallback(({ target: { name, value } }) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  }, []);

  return {
    values,
    onChange
  };
}
