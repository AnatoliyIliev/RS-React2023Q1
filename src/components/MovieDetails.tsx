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
        <div className={styles.movie}>
          <img
            width="250px"
            height="375px"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title}`}
            className={styles.movie_image}
          />
          <div className={styles.movie_info}>
            <h2 className={styles.movie_title}>{movie.title}</h2>
            <h3 className={styles.movie_tagline}>{movie.tagline}</h3>
            <div>Status: {movie.status}</div>
            <div>Release date: {movie.release_date}</div>
            <div>Genres: {movie.genres.map((genre) => '/ ' + genre.name + ' /')}</div>

            <div>Vote average: {movie.vote_average}</div>
            <div>Vote count: {movie.vote_count}</div>
            <div>Popularity: {movie.popularity}</div>
            {movie.homepage && (
              <div>
                Homepage:
                <a
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  href={movie.homepage}
                  rel="noreferrer"
                >
                  {movie.homepage}
                </a>
              </div>
            )}

            <div>Original language: {movie.original_language}</div>
            <div>Runtime: {movie.runtime} min</div>
            <div>
              Spoken languages:{' '}
              {movie.spoken_languages.map((lang) => '/ ' + lang.english_name + ' /')}
            </div>
            <div className={styles.movie_overview}>
              <h3>Overview: </h3>
              {movie.overview}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
