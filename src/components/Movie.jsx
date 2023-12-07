import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moviesData from '../data/movies.json';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const movies = moviesData.movies;
    setMovie(movies.find((movie) => movie.id === parseInt(id)));
  });

  return (
    <>
      <div className="container">
        <div className="card" style={{ width: '20rem' }}>
          <img src={movie.posterUrl} width="300" alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <span>
              <b>Director:</b> {movie.director}
            </span>
            <br />
            <span>
              <b>Year:</b> {movie.year}
            </span>
            <br />
            <span>
              <b>Runtime:</b> {movie.runtime} mins
            </span>
            <br />
            <span>
              <b>Starring:</b> {movie.actors}
            </span>
            <br />
            <br />
            <p className="card-text">{movie.plot}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
