import { useCallback } from "react";
import useStoreForm from "./useStoreForm";

export default function useUserInputStoreForm(formKey, submitHandler) {
  const { values, handleChange, handleSubmit: onSubmit } = useStoreForm(
    formKey,
    submitHandler
  );

  const onChange = useCallback(
    ({ target: { name, value } }) => {
      handleChange(name, value);
    },
    [handleChange]
  );

  const onCheckboxChange = useCallback(
    ({ target: { name, checked } }) => {
      handleChange(name, checked);
    },
    [handleChange]
  );

  const handleSubmit = useCallback(formValues => onSubmit(formValues), [
    onSubmit
  ]);

  return { values, onChange, onCheckboxChange, onSubmit: handleSubmit };
}
