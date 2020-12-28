require("dotenv").config();

import axios, { AxiosRequestConfig } from "axios";

const { TMDB_API_KEY } = process.env;

type movieOptions = "popular";

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
): Promise<[]> => {
  const url = makeUrl(searchOption, page);
  console.log(url);

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
