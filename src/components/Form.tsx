import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { nanoid } from 'nanoid';
import { PropsFroms, Inputs } from '../types';
import styles from '../styles/Form.module.scss';

function Form({ onSubmitForm }: PropsFroms) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [successMsg, setSuccessMsg] = useState('');

  const onSubmit = ({ name, phone, date, gender, genre, file, checkbox }: Inputs) => {
    const fileImg = file[0];
    const image = fileImg ? URL.createObjectURL(fileImg) : '';

    onSubmitForm &&
      onSubmitForm?.({
        id: Date.now(),
        name,
        phone,
        date,
        gender,
        genre,
        file: image,
        agree: checkbox,
      });

    onVisiblMessageSubmit();
    reset();
  };

  function onVisiblMessageSubmit() {
    setSuccessMsg('The data has been saved');

    setTimeout(() => {
      setSuccessMsg('');
    }, 2000);
  }

  const options = [
    '',
    'action',
    'adventure',
    'comedy',
    'drama',
    'crime',
    'horror',
    'fantasy',
    'romance',
    'animation',
    'family',
    'war',
    'documentary',
    'musical',
    'biography',
    'sci-fi',
    'western',
    'post-apocalyptic',
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div className={styles.from_name}>Name:*</div>
        <input
          {...register('name', {
            required: 'Name is required',
            pattern: {
              value: /^[A-Z]/,
              message: 'The name can only contain letters, an apostrophe, a dash, and spaces',
            },
          })}
          placeholder="Name"
          className={styles.form_input}
          type="text"
          autoFocus
        />
        {errors?.name && <div className={styles.form_erroe_message}>{errors?.name?.message}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Phone Number:*</div>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
              message: 'The phone number must be numbers',
            },
          })}
          className={styles.form_input}
          type="tel"
          placeholder="Phome number"
        />
        {errors.phone && <div className={styles.form_erroe_message}>{errors.phone.message}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Birth Date:*</div>
        <input
          className={styles.form_data}
          type="date"
          {...register('date', { required: 'Please enter the date of birth' })}
          min="1920-01-01"
          max="2000-01-01"
        />
        {errors.date && <div className={styles.form_erroe_message}>{errors.date.message}</div>}
      </label>
      <label htmlFor="male">
        <div className={styles.from_name}>Gender:*</div>
        <input
          type="radio"
          id="male"
          value="Male"
          {...register('gender', { required: 'Choose your gender' })}
          autoComplete="off"
        />
        Male
        <input
          type="radio"
          id="male"
          value="Female"
          {...register('gender', { required: 'Choose your gender' })}
          autoComplete="off"
        />
        Female
        {errors.gender && <div className={styles.form_erroe_message}>{errors.gender.message}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Pick your favorite genre:*</div>
        <select {...register('genre', { required: 'Choose your favorite ganre' })}>
          {options.map((item) => (
            <option key={nanoid()} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.genre && <div className={styles.form_erroe_message}>{errors.genre.message}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Avatar:*</div>
        <input
          className={styles.form_file}
          type="file"
          {...register('file', {
            required: 'Add your avatar',
          })}
          accept=".jpg,.jpeg,.png"
        />
        {errors.file && <div className={styles.form_erroe_message}>{errors.file.message}</div>}
      </label>
      <label>
        <input
          className={styles.form_checkbox}
          type="checkbox"
          {...register('checkbox', { required: 'Agree consent to my personal data' })}
        />
        I consent to my personal data*
        {errors.checkbox && (
          <div className={styles.form_erroe_message}>{errors.checkbox.message}</div>
        )}
      </label>
      <button type="submit">Submit</button>
      {successMsg && <div className={styles.form_message}>{successMsg}</div>}
    </form>
  );
}

export default Form;
