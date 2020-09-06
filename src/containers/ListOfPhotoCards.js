/* eslint-disable quotes */
/* eslint-disable semi */
import { withPhotos } from "../hoc/withPhotos";
import { ListOfPhotoCardsComponent } from "../components/ListOfPhotoCards";

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
