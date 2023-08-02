import { mvovieCast } from 'API/trends';
import React, { useEffect, useState } from 'react';
import styles from './cast.module.css';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    mvovieCast(movieId)
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <ul className={styles.list}>
      {data?.cast?.map(item => {
        return (
          <li  key={item.id} className={styles.listItem}>
            <img
              className={styles.castImige}
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
            />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
