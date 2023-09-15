import PropTypes from 'prop-types';
import './MoviesList.css';
import data from '../film.json';
import MovieCard from './MovieCard';
import filterMovie from '../utilits/filterMovie';

const MoviesList = ({ searchValue }) => {
  const resultMovies = filterMovie(data, searchValue);

  return (
    <div className="movies__container">
      {resultMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default MoviesList;
