import React from "react";
import { connect } from "react-redux";
import { getDetails } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getDetails(movieId);
  }

  render() {
    return (
      <div className="movie-detail">
        Detalle de la pelicula
        <h2>{`Título: ${this.props.movie.Title}`}</h2>
        <p>{this.props.movie.Plot}</p>
        {/* <h4>{`Año: ${this.props.movies.Year}`}</h4>
        <h4>{`Duración: ${this.props.movies.Runtime}`}</h4>
        <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
        <h4>{`Director: ${this.props.movies.Director}`}</h4> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     getMovieDetail: (id) => dispatch(getDetails(id)),
//   };
// }

export default connect(mapStateToProps, {getDetails})(Movie);
