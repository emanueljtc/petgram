/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToogleLikeMutation } from "../../containers/ToogleLikeMuttation";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToogleLikeMutation>
            {(toogleLike) => {
              const handleFavClick = () => {
                toogleLike({ variables: { input: { id } } });
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToogleLikeMutation>
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
