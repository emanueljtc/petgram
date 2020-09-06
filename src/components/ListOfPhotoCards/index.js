/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import { PhotoCard } from "../PhotoCard";
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
