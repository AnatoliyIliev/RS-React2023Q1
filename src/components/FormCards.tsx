import { Component } from 'react';
import styles from '../styles/FormCards.module.scss';

import { PropsFroms } from '../types';

class FormCard extends Component<PropsFroms> {
  render() {
    const { formCards } = this.props;

    return (
      <div>
        <ul className={styles.cards}>
          {formCards?.map(({ id, name, phone, date, gender, genre, file, agree }) => {
            return (
              <li key={id} className={styles.card}>
                <img className={styles.image} src={file} alt="avatar" />
                <p>Name: {name}</p>
                <p>Phone Number: {phone}</p>
                <time>Birth Date: {date}</time>
                <p>Gender: {gender}</p>
                <p>My favorite genre: {genre}</p>
                <p>I consent to my personal data: {agree ? 'Yes' : 'No'}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FormCard;
