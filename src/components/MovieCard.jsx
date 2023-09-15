import './MovieCard.css';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const imageClickHandler = (e) => {};

  return (
    <div className="movie-container">
      <img className="movie-image" src={movie.Poster} alt={movie.Title} />
      <div className="title-container">
        <div className="movie-title">{movie.Title}</div>
        <div className="movie-years">{movie.Year}</div>
      </div>
      <button
        className="image-btn"
        onClick={(e) => imageClickHandler(e)}
      ></button>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
