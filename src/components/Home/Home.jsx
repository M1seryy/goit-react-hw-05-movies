import React from 'react';
import styles from './home.module.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

const Home = ({ data }) => {
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
            <Link key={item.id} to={`/movies/${item.id}`}>
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
