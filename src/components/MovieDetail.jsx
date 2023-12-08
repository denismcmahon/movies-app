import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moviesData from '../data/movies.json';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const movies = moviesData.movies;
    setMovie(movies.find((movie) => movie.id === parseInt(id)));
  });

  return (
    <>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="card mt-4" style={{ width: '100%' }}>
          <img className="p-4" src={movie.posterUrl} width="300" alt={movie.title} />
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

export default MovieDetail;
