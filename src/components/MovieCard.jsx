import { useState, useEffect } from 'react';
import moviePlaceholderImage from '../images/movie-placeholder.svg';

const MovieCard = (props) => {
  const { title, releaseDate, posterPath, id } = props;
  const movieImage = posterPath === null ? moviePlaceholderImage : `http://image.tmdb.org/t/p/w154/${posterPath}`;
  return (
    <>
      <li className="movie-card">
        <img src={movieImage} alt={`${title} - Movie Poster`} />
        <p className="movie-title">{title}</p>
        <p>{releaseDate.split('-')[0]}</p>
      </li>
    </>
  );
};

export default MovieCard;
