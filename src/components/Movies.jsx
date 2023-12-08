// lib imports
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination, Form } from 'react-bootstrap';
import { fetchMovies } from '../actions/index';

// component imports
import MovieCard from './MovieCard';

// constants
const topRatedMoviesUrl = 'movie/top_rated?';
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w780/';

const Movies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await fetchMovies(topRatedMoviesUrl);
        console.log('DM ==> movie data: ', data);
        setState((prev) => ({ ...prev, movies: data.results }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoviesData();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const [state, setState] = useState({
    movies: [],
    limit: 10,
    activePage: 1,
  });

  const handlePageChange = (pageNumber) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));
  };

  const startIndex = (state.activePage - 1) * state.limit;
  const endIndex = startIndex + state.limit;
  const currentMovies = state.movies.slice(startIndex, endIndex);

  return (
    <>
      <div className="container">
        <ul>
          {currentMovies.map((movie) => (
            <MovieCard id={movie.id} title={movie.title} releaseDate={movie.release_date} posterPath={movie.poster_path} />
          ))}
        </ul>
        {/*<table className="table table-dark table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Director</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie) => (
              <tr key={movie.id} onClick={() => handleMovieClick(movie.id)} role="button">
                <th scope="row">{movie.id}</th>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
            </table>*/}
        <Pagination data-bs-theme="dark">
          {[...Array(Math.ceil(state.movies.length / state.limit)).keys()].map((page) => (
            <Pagination.Item key={page + 1} active={page + 1 === state.activePage} onClick={() => handlePageChange(page + 1)}>
              {page + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default Movies;
