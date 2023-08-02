import { getTrends } from 'API/trends';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Deatils from './Details/Deatils';
import Header from './Header/Header';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Reviews from './reviews/Reviews';

const App = () => {
  const [res, setres] = useState([]);

  useEffect(() => {
    getTrends()
      .then(res => setres(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={res} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Deatils data={res} />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
