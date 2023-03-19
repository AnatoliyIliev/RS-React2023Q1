import styles from '../styles/Container.module.scss';
import { ChildrenProps } from '../types';

function Container({ children }: ChildrenProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
