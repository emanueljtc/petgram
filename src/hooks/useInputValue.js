/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);

  return { value, onChange };
};
