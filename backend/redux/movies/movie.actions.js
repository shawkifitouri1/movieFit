import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
} from "./movie.types";

export function getMovieRequest() {
  return {
    type: GET_MOVIE_REQUEST,
  };
}

export function getMovieSuccess(item) {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: item,
  };
}

export function AddToFavorites(item) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: item,
  };
}

export function DeleteFromFavorites(item) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: item,
  };
}

export function getMovieError() {
  return {
    type: GET_MOVIE_ERROR,
  };
}

export function getMoviesRequest() {
  return {
    type: GET_MOVIES_REQUEST,
  };
}

export function getMoviesSuccess(item) {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: item,
  };
}

export function getMoviesError() {
  return {
    type: GET_MOVIES_ERROR,
  };
}

export const searchMovies = (query) => {
  return {
    type: "SEARCH_MOVIES",
    payload: query,
  };
};

export const clearSearchResults = () => {
  return {
    type: "CLEAR_SEARCH_RESULTS",
  };
};
