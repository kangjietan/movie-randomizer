import React, { useState } from "react";

import GlobalStyle from './styles';

import axios from "axios";

import { Wrapper } from "./style";

import OptionsLimit from "./OptionsLimit";
import RandomMovie from "./RandomMovie";

import { generateRandomInt } from './utils/';

export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface State {
  randomMovie: Movie | null;
  movies: Movie[];
}

export const App: React.FC = () => {
  const [state, setState] = useState<State>({
    randomMovie: null,
    movies: [],
  });

  const request = (page: number): Promise<Movie[]> => {
    return axios
      .get(`http://localhost:3000/tmdb/movie/popular?page=${page}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => console.error(error));
  };

  async function getMovies(page?: number) {
    const limit = page ? page : 1;
    let randomInt = generateRandomInt(1, 500);
    let movies: Movie[] = [];

    /** Ensure that it does not go over 500 page limit */
    if (randomInt + limit > 500) {
      randomInt -= limit;
    }

    for (let i = 0; i < limit; i++) {
      let data = await request(i + randomInt);
      movies.push(...data);
    }

    console.log(movies);
    let randomMovie = movies[0];
    setState({ movies, randomMovie });
  }

  const { randomMovie, movies } = state;

  if (!movies.length) {
    return (
      <Wrapper>
        <GlobalStyle />
        <OptionsLimit getMovies={getMovies} />
        {/* <button
          onClick={() => {
            getMovies();
          }}
          style={{ padding: "5rem", "backgroundColor": "#231e39" }}
        >
          Get Movies
        </button> */}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <GlobalStyle />
        <OptionsLimit getMovies={getMovies} />
        <RandomMovie randomMovie={randomMovie} />
      </Wrapper>
    );
  }
};
