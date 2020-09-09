/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import { FavsWithQuery } from "../containers/GetFavorites";
import { Layout } from "../components/Layout";

export default () => (
  <Layout
    title="Tus favoritos."
    subtitle="aqui puedes encontrar tus favoritos."
  >
    <FavsWithQuery />
  </Layout>
);
