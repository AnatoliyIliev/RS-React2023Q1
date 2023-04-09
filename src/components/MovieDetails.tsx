import { useEffect, useState } from 'react';
import { fetchDetailsMovie } from '../api/movieAPI';

import { MovieCardProps, MovieDetailsCard } from '../types';
import styles from '../styles/MovieDetails.module.scss';
import ImageNotFound from '../assets/img/photo_not_found_512px.png';
import ImageLoading from '../assets/img/loading-icon-animated-gif-20.jpg';

function MovieDetails({ movieID, onClose }: MovieCardProps) {
  const [movie, setMovie] = useState<MovieDetailsCard>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchDetailsMovie(movieID)
      .then((data) => data.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, [movieID]);

  return (
    <>
      {loading && <img src={ImageLoading} alt="loading..." />}
      {movie && (
        <div className={styles.movie}>
          <button className={styles.close_button} type="button" onClick={onClose}>
            &#10060;
          </button>
          <div>
            <img
              className={styles.poster_path}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : ImageNotFound
              }
              alt={`${movie.title}`}
            />
            <ul className={styles.logo_path}>
              {movie.production_companies.map((companie) => {
                if (companie.logo_path) {
                  return (
                    <li key={companie.id} className={styles.logo_path_list}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${companie.logo_path}`}
                        alt={`${companie.name}`}
                        className={styles.logo_path_img}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className={styles.movie_info}>
            <h2 className={styles.movie_title}>{movie.title}</h2>
            <h3 className={styles.movie_tagline}>{movie.tagline}</h3>
            <div>Status: {movie.status}</div>
            <div>Release date: {movie.release_date}</div>
            {movie.belongs_to_collection && (
              <div>Collections: {movie.belongs_to_collection.name}</div>
            )}
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
            <div>Budget: ${movie.budget}</div>
            <div>Revenue: ${movie.revenue}</div>
            <div>
              Spoken languages:{' '}
              {movie.spoken_languages.map((lang) => '/ ' + lang.english_name + ' /')}
            </div>
            <div>
              Production countries:{' '}
              {movie.production_countries.map((lang) => '/ ' + lang.name + ' /')}
            </div>
            <div>
              Production companies:{' '}
              {movie.production_companies.map((lang) => '/ ' + lang.name + ' /')}
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
