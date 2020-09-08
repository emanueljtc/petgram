/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import { LoginMutation } from "../containers/LoginMutation";

export const NotRegisteredUser = () => {
  const { activeAuth } = useContext(Context);

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activeAuth(signup);
            });
          };
          const errorMsg =
            error && "El usuario ya existe o hay algun problema.";

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activeAuth(login);
            });
          };
          const errorMsg =
            error &&
            "Los datos ingresados no son correctos o el usuario no existe.";

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Iniciar sesión"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
