import { PropsCard } from '../types';
import chooseColor from './chooseColor';
import styles from '../styles/Cards.module.scss';

function Cards({ cards, currentCardID }: PropsCard) {
  return (
    <ul className={styles.cards}>
      {cards &&
        cards.map((card) => {
          const [year, month, date] = card.release_date.split('-');
          const numberOfAverage = Number(card.vote_average.toFixed(1));
          const averageColorStyle = chooseColor(numberOfAverage);

          return (
            <li key={card.id} className={styles.cards_item} onClick={() => currentCardID(card.id)}>
              <img
                width="250px"
                height="375px"
                src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                alt={`${card.title}`}
                className={styles.card_image}
              />
              <h2 className={styles.card_title}>{card.title}</h2>
              <div className={styles.card_date}>{`${date}.${month}.${year}`}</div>
              <div className={styles.card_circle}>
                <span className={styles.card_average} style={{ color: `${averageColorStyle}` }}>
                  {numberOfAverage}
                </span>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Cards;
