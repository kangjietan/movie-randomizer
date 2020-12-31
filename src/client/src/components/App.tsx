import React, { useState } from "react";

import axios from "axios";

import { Wrapper } from "./style";

import OptionsLimit from "./OptionsLimit";

interface Movie {
  genre_ids: number[];
  id: number;
  original_title: string;
  overiew: string;
  poster_path: string;
  release_date: string;
  title: string;
  [key: string]: any;
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

  const [pageLimit, setPageLimit] = useState(0);

  const request = (page: number, movies: Movie[]): Promise<void> => {
    return axios
      .get(`http://localhost:3000/tmdb/movie/popular?page=${page}`)
      .then((response) => {
        movies.push(...response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const getMovies = () => {
    const limit = pageLimit ? pageLimit : 1;
    let promises: Promise<void>[] = [];
    let movies: Movie[] = [];

    for (let i = 0; i < limit; i++) {
      request(i, movies);
    }

    Promise.all(promises).then(() => {
      console.log(promises, movies);
      const movie: Movie = movies[0];
      setState({ movies, randomMovie: movie });
    });
  };

  const { randomMovie, movies } = state;

  if (!movies.length) {
    return (
      <Wrapper>
        <OptionsLimit setPageLimit={setPageLimit} />
        <button onClick={getMovies} style={{ padding: "5rem" }}>
          Get Movies
        </button>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <OptionsLimit setPageLimit={setPageLimit} />
      </Wrapper>
    );
  }
};
