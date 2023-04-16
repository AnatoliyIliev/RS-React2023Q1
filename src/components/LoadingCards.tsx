import { nanoid } from 'nanoid';

import styles from '../styles/Cards.module.scss';
import ImageLoading from '../assets/img/loading-icon-animated-gif-20.jpg';

function LoadingCards() {
  return (
    <ul className={styles.cards}>
      {Array(20)
        .fill(1)
        .map(() => (
          <li key={nanoid()} className={styles.cards_item}>
            <img src={ImageLoading} alt="ImageLoading" className={styles.card_image} />
            <h2 className={styles.card_title}>Loading name...</h2>
            <div className={styles.card_date}>Loading date...</div>
            <div className={styles.card_circle}>
              <span className={styles.card_average}>10</span>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default LoadingCards;
