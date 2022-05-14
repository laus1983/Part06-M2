export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(id) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload: id };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=a5673192&s=" + titulo)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getDetails(id) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=a5673192&i=" + id)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_DETAILS", payload: json });
      });
  };
}
