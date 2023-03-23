import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.scss';

function Navigation() {
  return (
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
  );
}

export default Navigation;
