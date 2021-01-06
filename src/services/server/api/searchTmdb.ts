import dotenv from "dotenv";

import axios, { AxiosRequestConfig } from "axios";

dotenv.config();

const { TMDB_API_KEY } = process.env;

type movieOptions = "popular";

interface Movie {
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

const movieSearchOptions: { [key: string]: string } = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`,
};

const makeUrl = (searchOption: movieOptions, page?: number): string => {
  let url: string = movieSearchOptions[searchOption];

  if (page && page > 0) url += `&language=en-US&page=${page}`;

  return url;
};

export const searchApi = (
  searchOption: movieOptions,
  page?: number
): Promise<Movie[]> => {
  const url = makeUrl(searchOption, page);

  const options: AxiosRequestConfig = {
    method: "GET",
    url,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
