// import { createSelector } from 'reselect';

const initialState = {
  loading: false,
  error: false,
  movies: [],
  searchResults: [], 
  favoriteList: [], 

  movie: null,
  movieStatus: false, 
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES_REQUEST":
      console.log('GET_MOVIES_REQUEST');

      return {
        ...state,
        loading: true,
        error: false,
      };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movieStatus: true,
        movies: action.payload.results, 
      };

    case "GET_MOVIES_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "GET_MOVIE_REQUEST":

      return {
        ...state,
        loading: true,
        error: false,
      };

    case "GET_MOVIE_SUCCESS":
  
    return {
        ...state,
        loading: false,
        // movieStatus: true,
        movie: action.payload, 
      };

    case "GET_MOVIE_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "SEARCH_MOVIES":
      const searchQuery = action.payload.toLowerCase();
      const filteredMovies = state.movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchQuery)
      
      );
      return {
        ...state,
        searchResults: filteredMovies,
      };

    case "CLEAR_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: [], 
      };

      case "ADD_TO_FAVORITES":
console.log(action.payload,state.favoriteList.includes(action.payload));
        // Check if the movie is already in the favorite list
        if (!state.favoriteList.includes(action.payload)) {
          // If not, add it to the favorite list
          console.log('ADD_TO_FAVORITES');

          return {
            ...state,
            favoriteList: [...state.favoriteList, action.payload],
          };
        }else{
          const updatedFavorites = state.favoriteList.filter(
            (movieId) => movieId !== action.payload
          );
          console.log('Delete');
      
          return {
            ...state,
            favoriteList:updatedFavorites,
          }; 

        }

    default:
      return state;
  }
};

export default movieReducer;
