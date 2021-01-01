import * as React from "react";

import { RandomMovieContainer, RandomMovieTitle } from "./style";

import { Movie } from "../App";

interface Props {
  randomMovie: null | Movie;
}

export const RandomMovie: React.FC<Props> = ({ randomMovie }) => {
	if (!randomMovie) return null;

  return (
    <RandomMovieContainer>
      <RandomMovieTitle>{randomMovie.title}</RandomMovieTitle>
    </RandomMovieContainer>
  );
};
