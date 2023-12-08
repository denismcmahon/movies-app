import { useState, useEffect } from 'react';
import moviePlaceholderImage from '../images/movie-placeholder.svg';

const MovieCard = (props) => {
  console.log('DM ==> title: ', props.title);
  console.log('DM ==> releaseDate: ', props.releaseDate);
  console.log('DM ==> posterPath: ', props.posterPath);
  const { title, releaseDate, posterPath, id } = props;
  const movieImage = posterPath === null ? moviePlaceholderImage : `http://image.tmdb.org/t/p/w154/${posterPath}`;
  return (
    <>
      <img src={movieImage} alt={`${title} - Movie Poster`} />
    </>
  );
};

export default MovieCard;
