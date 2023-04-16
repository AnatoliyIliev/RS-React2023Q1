import { useGetMovieByIDQuery } from '../RTK_Query/movieAPI';

import { MovieCardProps } from '../types';

import styles from '../styles/MovieDetails.module.scss';
import ImageNotFound from '../assets/img/photo_not_found_512px.png';
import ImageLoading from '../assets/img/loading-icon-animated-gif-20.jpg';

function MovieDetails({ movieID, onClose }: MovieCardProps) {
  const { data, isLoading } = useGetMovieByIDQuery(movieID);

  return (
    <>
      {isLoading && <img src={ImageLoading} alt="loading..." />}
      {data && (
        <div className={styles.movie}>
          <button className={styles.close_button} type="button" onClick={onClose}>
            &#10060;
          </button>
          <div>
            <img
              className={styles.poster_path}
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  : ImageNotFound
              }
              alt={`${data.title}`}
            />
            <ul className={styles.logo_path}>
              {data.production_companies.map((companie) => {
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
            <h2 className={styles.movie_title}>{data.title}</h2>
            <h3 className={styles.movie_tagline}>{data.tagline}</h3>
            <div>Status: {data.status}</div>
            <div>Release date: {data.release_date}</div>
            {data.belongs_to_collection && (
              <div>Collections: {data.belongs_to_collection.name}</div>
            )}
            <div>Genres: {data.genres.map((genre) => '/ ' + genre.name + ' /')}</div>
            <div>Vote average: {data.vote_average}</div>
            <div>Vote count: {data.vote_count}</div>
            <div>Popularity: {data.popularity}</div>
            {data.homepage && (
              <div>
                Homepage:
                <a
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  href={data.homepage}
                  rel="noreferrer"
                >
                  {data.homepage}
                </a>
              </div>
            )}
            <div>Original language: {data.original_language}</div>
            <div>Runtime: {data.runtime} min</div>
            <div>Budget: ${data.budget}</div>
            <div>Revenue: ${data.revenue}</div>
            <div>
              Spoken languages:{' '}
              {data.spoken_languages.map((lang) => '/ ' + lang.english_name + ' /')}
            </div>
            <div>
              Production countries:{' '}
              {data.production_countries.map((lang) => '/ ' + lang.name + ' /')}
            </div>
            <div>
              Production companies:{' '}
              {data.production_companies.map((lang) => '/ ' + lang.name + ' /')}
            </div>
            <div className={styles.movie_overview}>
              <h3>Overview: </h3>
              {data.overview}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
