/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
