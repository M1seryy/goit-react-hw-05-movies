import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ data }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        <ImageList
          style={{ margin: '0 auto' }}
          sx={{ width: 1400, height: 900 }}
          cols={3}
          rowHeight={164}
        >
          {data.map(item => (
            <Link key={item.id} state={location} to={`/movies/${item.id}`}>
              <ImageListItem key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </ul>
    </>
  );
};

export default Home;
