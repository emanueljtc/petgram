/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../containers/ListOfPhotoCards";
import { Layout } from "../components/Layout";

export const Home = ({ categoryID }) => (
  <Layout
    title="Tu app de fotos de mascotas."
    subtitle="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos."
  >
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryID} />
  </Layout>
);
