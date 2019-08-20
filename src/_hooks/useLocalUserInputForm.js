import { useState, useCallback } from "react";

export default function useLocalUserInputForm(initialState = {}, submitCb) {
  const [values, setValues] = useState(initialState);

  const onChange = useCallback(({ target: { name, value } }) => {
    setValues(values => ({
      ...values,
      [name]: value
    }));
  }, []);

  const onCheckboxChange = useCallback(({ target: { name, checked } }) => {
    setValues(values => ({
      ...values,
      [name]: checked
    }));
  }, []);

  const onSubmit = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    submitCb({ ...values });
  };

  return {
    values,
    onChange,
    onCheckboxChange,
    onSubmit
  };
}
