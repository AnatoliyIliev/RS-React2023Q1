import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';
import Container from './Container';

import styles from '../styles/Header.module.scss';

function Layout() {
  return (
    <Container>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Outlet />
    </Container>
  );
}

export default Layout;
