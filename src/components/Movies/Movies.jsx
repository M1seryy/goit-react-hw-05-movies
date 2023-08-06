import { findByName } from 'API/trends';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [params, setSearchParams] = useSearchParams('');
  const query = params.get('query');
  const movieQuery = useRef();
  const location = useLocation();
  const onHandle = e => {
    e.preventDefault();
    findByName(movieQuery.current.value)
      .then(res => setMovies(res.results))
      .catch(err => console.log(err));
  };
  console.log(movies);

  const onValueHandler = e => {
    setSearchParams({ query: e.target.value });
  };
  useEffect(() => {
    if (query !== null) {
      findByName(query)
        .then(res => setMovies(res.results))
        .catch(err => console.log(err));
    } else return;
  }, [query]);
  return (
    <div>
      <form onSubmit={onHandle}>
        <input
          value={query}
          ref={movieQuery}
          onChange={onValueHandler}
          type="text"
          className={styles.input}
        />
        <input type="submit" value="Find" />
      </form>
      <ul>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={location}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
