import React, { useState } from "react";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const { id, onChange, errorMessage, ...inputProps } = props;
  return (
    <>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </>
  );
};

export default FormInputs;
