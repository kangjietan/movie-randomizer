import React, { useState } from "react";

import axios from "axios";

import { Wrapper } from "./style";

import OptionsLimit from "./OptionsLimit";
import RandomMovie from "./RandomMovie";

export interface Movie {
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

  // const request = (page: number): Promise<Movie[]> => {
  //   return axios
  //     .get(`http://localhost:3000/tmdb/movie/popular?page=${page}`)
  //     .then((response) => {
  //       return response.data.results;
  //     })
  //     .catch((error) => console.error(error));
  // };

  // async function getMovies(page?: number) {
  //   const limit = page ? page : 1;
  //   let movies: Movie[] = [];

  //   for (let i = 0; i < limit; i++) {
  //     let data = await request(i);
  //     movies.push(...data);
  //   }

  //   console.log(movies);
  //   let randomMovie = movies[0];
  //   setState({ movies, randomMovie });
  // }

  const getMovies = () => {
    let min = 1;
    let max = 500;
    let page = Math.floor(Math.random() * (max - min + 1) + min);

    axios
      .get(`http://localhost:3000/tmdb/movie/popular?page=${page}`)
      .then((response) => {
        let movies = response.data.results;
        let randomMovie = movies[0];
        setState({ movies, randomMovie });
      })
      .catch((error) => console.error(error));
  };

  const { randomMovie, movies } = state;

  if (!movies.length) {
    return (
      <Wrapper>
        {/* <OptionsLimit getMovies={getMovies} /> */}
        <button
          onClick={() => {
            getMovies();
          }}
          style={{ padding: "5rem" }}
        >
          Get Movies
        </button>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {/* <OptionsLimit getMovies={getMovies} /> */}
        <RandomMovie randomMovie={randomMovie} />
      </Wrapper>
    );
  }
};
