import React, { Component, createRef } from 'react';
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

import { PropsFroms, StateForm } from '../types';

class Form extends Component<PropsFroms, StateForm> {
  name: React.RefObject<HTMLInputElement>;
  phone: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  radioMale: React.RefObject<HTMLInputElement>;
  radioFemale: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  file: React.RefObject<HTMLInputElement>;
  checkbox: React.RefObject<HTMLInputElement>;

  constructor(props: PropsFroms) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = createRef();
    this.phone = createRef();
    this.date = createRef();
    this.radioMale = createRef();
    this.radioFemale = createRef();
    this.select = createRef();
    this.file = createRef();
    this.checkbox = createRef();

    this.state = {
      submitMessage: false,
      errorValidation: {
        nameValid: '',
        phoneValid: '',
        dateValid: '',
        genderValid: '',
        ganreValid: '',
        fileValid: '',
        checkboxValid: '',
      },
    };
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { onSubmitForm } = this.props;

    const { name, phone, date, radioMale, radioFemale, select, file, checkbox } = this;

    const currentName = (name.current as HTMLInputElement).value;
    const currentPhone = (phone.current as HTMLInputElement).value;
    const currentDate = (date.current as HTMLInputElement).value;
    const currentRadioMale = (radioMale.current as HTMLInputElement).checked;
    const currentRadioFemale = (radioFemale.current as HTMLInputElement).checked;
    const currentSelect = (select.current as HTMLSelectElement).value;
    const currentCheckbox = (checkbox.current as HTMLInputElement).checked;

    let gender = '';
    if (currentRadioMale) {
      gender = (radioMale.current as HTMLInputElement).alt;
    } else if (currentRadioFemale) {
      gender = (radioFemale.current as HTMLInputElement).alt;
    }

    const fileImg = file.current?.files?.[0];
    const image = fileImg ? URL.createObjectURL(fileImg) : '';

    const nameValid = nameValidation(currentName);
    const phoneValid = phoneValidation(currentPhone);
    const dateValid = dateValidation(currentDate);
    const genderValid = genderValidation(currentRadioMale, currentRadioFemale);
    const ganreValid = ganreValidation(currentSelect);
    const fileValid = fileValidation(file);
    const checkboxValid = checkboxValidation(currentCheckbox);

    this.setState({
      errorValidation: {
        nameValid,
        phoneValid,
        dateValid,
        genderValid,
        ganreValid,
        fileValid,
        checkboxValid,
      },
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
        onSubmitForm({
          id: Date.now(),
          name: currentName,
          phone: currentPhone,
          date: currentDate,
          gender: gender,
          genre: currentSelect,
          file: image,
          agree: currentCheckbox,
        });

      this.onVisiblMessageSubmit();
      this.onResetData();
    }
  }

  onResetData = () => {
    const { name, phone, date, radioMale, radioFemale, select, file, checkbox } = this;

    (name.current as HTMLInputElement).value = '';
    (phone.current as HTMLInputElement).value = '';
    (date.current as HTMLInputElement).value = '';
    (radioMale.current as HTMLInputElement).checked = false;
    (radioFemale.current as HTMLInputElement).checked = false;
    (select.current as HTMLSelectElement).value = '';
    (file.current as HTMLInputElement).value = '';
    (checkbox.current as HTMLInputElement).checked = false;
  };

  onVisiblMessageSubmit = () => {
    this.setState({ submitMessage: true });

    setTimeout(() => {
      this.setState({ submitMessage: false });
    }, 2000);
  };

  render() {
    const { submitMessage } = this.state;

    const { nameValid, phoneValid, dateValid, genderValid, ganreValid, fileValid, checkboxValid } =
      this.state.errorValidation;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <div className={styles.from_name}>Name:*</div>
          <input
            className={styles.form_input}
            type="text"
            name="name"
            ref={this.name}
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
            name="phone"
            ref={this.phone}
            placeholder="Phome number"
          />
          {phoneValid && <div className={styles.form_erroe_message}>{phoneValid}</div>}
        </label>
        <label>
          <div className={styles.from_name}>Birth Date:*</div>
          <input
            className={styles.form_data}
            type="date"
            name="birthdate"
            ref={this.date}
            min="1920-01-01"
            max="2000-01-01"
          />
          {dateValid && <div className={styles.form_erroe_message}>{dateValid}</div>}
        </label>
        <label htmlFor="male">
          <div className={styles.from_name}>Gender:*</div>
          <input
            type="radio"
            id="male"
            alt="Male"
            name="gengerChoice"
            ref={this.radioMale}
            autoComplete="off"
          />
          Male
          <input
            type="radio"
            id="male"
            alt="Female"
            name="gengerChoice"
            ref={this.radioFemale}
            autoComplete="off"
          />
          Female
          {genderValid && <div className={styles.form_erroe_message}>{genderValid}</div>}
        </label>
        <label>
          <div className={styles.from_name}>Pick your favorite genre:*</div>
          <select ref={this.select} name="genre">
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
          <input className={styles.form_file} type="file" name="file" ref={this.file} />
          {fileValid && <div className={styles.form_erroe_message}>{fileValid}</div>}
        </label>
        <label>
          <input className={styles.form_checkbox} type="checkbox" ref={this.checkbox} />I consent to
          my personal data*
          {checkboxValid && <div className={styles.form_erroe_message}>{checkboxValid}</div>}
        </label>
        <button type="submit">Submit</button>
        {submitMessage && <div className={styles.form_message}>The data has been saved</div>}
      </form>
    );
  }
}

export default Form;
