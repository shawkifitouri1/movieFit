import { useState, useEffect } from 'react';
import { getMoviesRequest, getMoviesSuccess, getMovieRequest, getMovieSuccess } from '../redux/movies/movie.actions';
import axios from 'axios';

const apiKey = '04131810d37f8347a018e341092ff20e';
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;

export const image500 = posterPath => posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
export const image342 = posterPath => posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null;
export const image185 = posterPath => posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;

export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

export const movieService = { getMovies };

export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesRequest());

    axios.get(trendingMoviesEndpoint)
      .then(response => {
        dispatch(getMoviesSuccess(response.data));
      })
      .catch(error => {
        console.log("getMovies error", error);
      });
  };
};

export const getMovie = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getMovieRequest());

      const response = await axios.get(movieDetailsEndpoint(id));
      dispatch(getMovieSuccess(response.data));
    } catch (error) {
      console.log("getMovie error", error);
    }
  };
};
