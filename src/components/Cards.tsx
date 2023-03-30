import { PropsCard } from '../types';
import styles from '../styles/Cards.module.scss';

function chooseColor(value: number) {
  if (value < 5) return 'red';
  else if (value >= 5 && value < 8) return 'orange';
  else if (value >= 8) return 'green';
}

function Cards({ cards }: PropsCard) {
  return (
    <ul className={styles.cards}>
      {cards &&
        cards.map((card) => {
          const [year, month, date] = card.release_date.split('-');
          const numberOfAverage = Number(card.vote_average.toFixed(1));
          const averageColorStyle = chooseColor(numberOfAverage);

          return (
            <li key={card.id} className={styles.cards_item}>
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
              <div className={styles.card_overview}>
                <h3>Overview</h3>
                {card.overview}
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Cards;
