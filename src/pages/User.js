/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React, { useContext } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  );
};
