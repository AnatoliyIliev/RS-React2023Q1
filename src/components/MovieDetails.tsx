import { useEffect, useState } from 'react';
import { fetchDetailsMovie } from '../api/movieAPI';

import { MovieCardID, MovieDetails } from '../types';
import styles from '../styles/MovieDetails.module.scss';

function MovieDetails({ movieID }: MovieCardID) {
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    fetchDetailsMovie(movieID).then((data) => {
      setMovie(data);
    });
  }, [movieID]);

  return (
    <>
      {movie && (
        <div>
          <img
            width="250px"
            height="375px"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title}`}
            className={styles.movie_image}
          />
          <h2 className={styles.movie_title}>{movie.title}</h2>
          <h3 className={styles.movie_title}>{movie.tagline}</h3>
          <div>Genres: {movie.genres.map((genre) => genre.name)}</div>
          <div>Popularity: {movie.popularity}</div>
          <div className={styles.movie_overview}>
            <h3>Overview: </h3>
            {movie.overview}
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
