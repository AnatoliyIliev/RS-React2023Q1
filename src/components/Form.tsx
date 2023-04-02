import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PropsFroms, Inputs, ErrorValidation } from '../types';
import styles from '../styles/Form.module.scss';

import {
  nameValidation,
  phoneValidation,
  dateValidation,
  genderValidation,
  ganreValidation,
  fileValidation,
  checkboxValidation,
} from './ValidationForm';

function Form({ onSubmitForm }: PropsFroms) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorValidation, setErrorValidation] = useState<ErrorValidation>({
    nameValid: '',
    phoneValid: '',
    dateValid: '',
    genderValid: '',
    ganreValid: '',
    fileValid: '',
    checkboxValid: '',
  });

  const onSubmit = ({ name, phone, date, gender, genre, file, checkbox }: Inputs) => {
    const fileImg = file[0];
    const image = fileImg ? URL.createObjectURL(fileImg) : '';

    const nameValid = nameValidation(name);
    const phoneValid = phoneValidation(phone.toString());
    const dateValid = dateValidation(date);
    const genderValid = genderValidation(gender);
    const ganreValid = ganreValidation(genre);
    const fileValid = fileValidation(file);
    const checkboxValid = checkboxValidation(checkbox);

    setErrorValidation({
      nameValid,
      phoneValid,
      dateValid,
      genderValid,
      ganreValid,
      fileValid,
      checkboxValid,
    });
    const validation =
      nameValid === '' &&
      phoneValid === '' &&
      dateValid === '' &&
      genderValid === '' &&
      ganreValid === '' &&
      fileValid === '' &&
      checkboxValid === '';

    if (validation) {
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
    }
  };

  function onVisiblMessageSubmit() {
    setSuccessMsg('The data has been saved');

    setTimeout(() => {
      setSuccessMsg('');
    }, 2000);
  }

  const { nameValid, phoneValid, dateValid, genderValid, ganreValid, fileValid, checkboxValid } =
    errorValidation;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div className={styles.from_name}>Name:*</div>
        <input
          className={styles.form_input}
          type="text"
          {...register('name')}
          placeholder="Name"
          autoFocus
        />
        {nameValid && <div className={styles.form_erroe_message}>{nameValid}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Phone Number:*</div>
        <input
          className={styles.form_input}
          type="tel"
          {...register('phone')}
          placeholder="Phome number"
        />
        {phoneValid && <div className={styles.form_erroe_message}>{phoneValid}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Birth Date:*</div>
        <input
          className={styles.form_data}
          type="date"
          {...register('date')}
          min="1920-01-01"
          max="2000-01-01"
        />
        {dateValid && <div className={styles.form_erroe_message}>{dateValid}</div>}
      </label>
      <label htmlFor="male">
        <div className={styles.from_name}>Gender:*</div>
        <input type="radio" id="male" value="Male" {...register('gender')} autoComplete="off" />
        Male
        <input type="radio" id="male" value="Female" {...register('gender')} autoComplete="off" />
        Female
        {genderValid && <div className={styles.form_erroe_message}>{genderValid}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Pick your favorite genre:*</div>
        <select {...register('genre')}>
          <option value="">--Genre--</option>
          <option value="action">action</option>
          <option value="adventure">adventure</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="crime">crime</option>
          <option value="horror">horror</option>
          <option value="fantasy">fantasy</option>
          <option value="romance">romance</option>
          <option value="animation">animation</option>
          <option value="family">family</option>
          <option value="war">war</option>
          <option value="documentary">documentary</option>
          <option value="musical">musical</option>
          <option value="biography">biography</option>
          <option value="sci-fi">sci-fi</option>
          <option value="western">western</option>
          <option value="post-apocalyptic">post-apocalyptic</option>
        </select>
        {ganreValid && <div className={styles.form_erroe_message}>{ganreValid}</div>}
      </label>
      <label>
        <div className={styles.from_name}>Avatar:*</div>
        <input className={styles.form_file} type="file" {...register('file')} name="file" />
        {fileValid && <div className={styles.form_erroe_message}>{fileValid}</div>}
      </label>
      <label>
        <input className={styles.form_checkbox} type="checkbox" {...register('checkbox')} />I
        consent to my personal data*
        {checkboxValid && <div className={styles.form_erroe_message}>{checkboxValid}</div>}
      </label>
      <button type="submit">Submit</button>
      {successMsg && <div className={styles.form_message}>{successMsg}</div>}
    </form>
  );
}

export default Form;
