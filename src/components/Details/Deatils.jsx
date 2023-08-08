import { findById } from 'API/trends';
import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styles from './details.module.css';

const Deatils = () => {
  const [backPath, setBackPath] = useState('');
  const [dataDetails, setdataDetails] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  useEffect(() => {
    findById(movieId)
      .then(res => setdataDetails(res))
      .catch(err => console.log(err));
  }, [movieId]);

  useEffect(() => {
    setBackPath(location);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backHandler = () => {
    navigate(backPath.state);
  };
  return (
    <div className={styles.movieWrap}>
      <button className="backBtn" onClick={backHandler}>
        Back
      </button>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/original/${dataDetails?.backdrop_path}`}
        alt={dataDetails?.title}
      />
      <h1>{dataDetails?.title}</h1>
      <h1>{Math.round(dataDetails?.vote_average)}0%</h1>
      <h1>Overview:</h1>
      <p>{dataDetails?.overview}</p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};

export default Deatils;
