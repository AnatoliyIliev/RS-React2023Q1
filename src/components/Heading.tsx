import { ChildrenHeading } from '../types';
import styles from '../styles/Heading.module.scss';

function Heading({ children }: ChildrenHeading) {
  return <h1 className={styles.heading}>{children}</h1>;
}

export default Heading;
