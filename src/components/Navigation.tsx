import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { currentPage } from './currentPage';

import styles from '../styles/Navigation.module.scss';

function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) => (isActive ? styles.activeStyle : styles.navigation)}
        >
          Form
        </NavLink>
      </nav>
      <div className={styles.page}>{currentPage(path)}</div>
    </>
  );
}

export default Navigation;
