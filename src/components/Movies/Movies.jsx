import { findByName } from 'API/trends';
import React, {  useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const movieQuery = useRef();
const location = useLocation()
  const onHandle = e => {
    e.preventDefault();
    findByName(movieQuery.current.value)
      .then(res => setMovies(res.results))
      .catch(err => console.log(err));
  };
  console.log(movies);
  return (
    <div>
      <form onSubmit={onHandle}>
        <input ref={movieQuery} type="text" className={styles.input} />
        <input type="submit" value="Find" />
      </form>
      <ul>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={location}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
