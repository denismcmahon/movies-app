import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import moviesData from '../data/movies.json';

const Movies = () => {
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  const [movies, setMovies] = useState(moviesData.movies);
  console.log(moviesData);
  return (
    <>
      <div className="container">
        <table className="table table-dark table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Director</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id} onClick={() => handleMovieClick(movie.id)} role="button">
                <th scope="row">{movie.id}</th>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;
