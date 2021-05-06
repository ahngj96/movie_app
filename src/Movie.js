import React from "react";
import PropTypes from "prop-types";

function Genres(props) {
  var genres_list = props.genres.map((genre, index) => (
    <li key={index} className="genres__genre">
      {genre}
    </li>
  ));
  return <ul className={props.className}>{genres_list}</ul>;
}

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__col">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <Genres className="movie__genres" genres={genres} />
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Movie;
