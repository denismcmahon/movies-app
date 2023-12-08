// lib imports
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination, Form } from 'react-bootstrap';
import { fetchMovies } from '../actions/index';

// component imports
import MovieCard from './MovieCard';

// constants
const topRatedMoviesUrl = 'movie/top_rated?';
const trendingMoviesUrl = 'trending/movie/day?';

const Movies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await fetchMovies(trendingMoviesUrl);
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
    limit: 16,
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
