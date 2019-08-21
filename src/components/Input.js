import React from "react";
import TextField from "@material-ui/core/TextField";

export const areEqual = (prev, next) =>
  prev.value === next.value &&
  prev.name === next.name &&
  prev.onChange === next.onChange &&
  prev.error === next.error;

export const BasicInput = ({ name, value, onChange, ...rest }) => (
  <TextField
    name={name}
    value={value}
    onChange={onChange}
    variant="outlined"
    inputProps={{
      "data-testid": name
    }}
    style={{
      marginTop: "20px"
    }}
    InputProps={{
      style: { height: "40px" }
    }}
    fullWidth
    {...rest}
  />
);
/**
 * A memoized component that will re-render only one of props described in areEqual change.
 */
const Input = React.memo(props => <BasicInput {...props} />, areEqual);

export default Input;
