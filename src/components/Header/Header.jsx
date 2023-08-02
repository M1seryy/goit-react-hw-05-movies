import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.listList}>
        <li>
          <Link to={"/"}>
            {' '}
            <button className={styles.listButton}>Home</button>
          </Link>
        </li>
        <li>
          <Link to={"/movies"}>
            {' '}
            <button className={styles.listButton}>Movies</button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
