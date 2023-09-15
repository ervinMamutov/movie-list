const filterMovie = (movies, search) => {
  if (!search) {
    return movies;
  } else {
    return movies.filter((movie) => {
      return movie.Title.toLowerCase().includes(search.trim());
    });
  }
};

export default filterMovie;
