/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import { Button } from "./styles";

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};
