import React, { Component, createRef } from 'react';
import styles from '../styles/Form.module.scss';

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
      nameError: '',
      phoneError: '',
      dateError: '',
      genderError: '',
      selectError: '',
      fileError: '',
      checkboxError: '',
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

    const validation = this.onValidationData(
      currentName,
      currentPhone,
      currentDate,
      currentRadioMale,
      currentRadioFemale,
      currentSelect,
      file,
      currentCheckbox
    );

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

  onValidationData = (
    currentName: string,
    currentPhone: string,
    currentDate: string,
    currentRadioMale: boolean,
    currentRadioFemale: boolean,
    currentSelect: string,
    file: React.RefObject<HTMLInputElement>,
    currentCheckbox: boolean
  ) => {
    const nameTest = /^[A-Z]/.test(currentName);
    const phoneTest =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
        currentPhone
      );

    let nameCheckt = true;
    let phoneCheckt = true;
    let dateCheckt = true;
    let genderCheckt = true;
    let ganreCheckt = true;
    let fileCheckt = true;
    let checkboxCheckt = true;

    if (currentName.trim() === '') {
      this.setState({ nameError: 'Enter something' });
      nameCheckt = false;
    } else if (!nameTest) {
      this.setState({
        nameError: 'The name can only contain letters, an apostrophe, a dash, and spaces',
      });
      nameCheckt = false;
    } else {
      this.setState({ nameError: '' });
      nameCheckt = true;
    }

    if (currentPhone.trim() === '') {
      this.setState({ phoneError: 'Enter something' });
      phoneCheckt = false;
    } else if (!phoneTest) {
      this.setState({
        phoneError: 'The phone number must be numbers',
      });
      phoneCheckt = false;
    } else {
      this.setState({ phoneError: '' });
      phoneCheckt = true;
    }

    if (currentDate === '') {
      this.setState({ dateError: 'Please enter the date of birth.' });
      dateCheckt = false;
    } else {
      this.setState({ dateError: '' });
      dateCheckt = true;
    }

    if (!currentRadioMale && !currentRadioFemale) {
      this.setState({ genderError: 'Choose your gender.' });
      genderCheckt = false;
    } else {
      this.setState({ genderError: '' });
      genderCheckt = true;
    }

    if (currentSelect === '') {
      this.setState({ selectError: 'Choose your favorite ganre.' });
      ganreCheckt = false;
    } else {
      this.setState({ selectError: '' });
      ganreCheckt = true;
    }

    const fileImg = file.current?.files?.[0];

    if (!fileImg) {
      this.setState({ fileError: 'Add your avatar' });
      fileCheckt = false;
    } else if (fileImg && /\.(jpe?g|png|gif)$/i.test(fileImg.name) === false) {
      this.setState({ fileError: 'File must be .jpeg, .jpg, .png, .gif' });
      fileCheckt = false;
    } else {
      this.setState({ fileError: '' });
      fileCheckt = true;
    }

    if (!currentCheckbox) {
      this.setState({ checkboxError: 'Agree consent to my personal data' });
      checkboxCheckt = false;
    } else {
      this.setState({ checkboxError: '' });
      checkboxCheckt = true;
    }

    return (
      nameCheckt &&
      phoneCheckt &&
      dateCheckt &&
      genderCheckt &&
      ganreCheckt &&
      fileCheckt &&
      checkboxCheckt
    );
  };

  render() {
    const {
      submitMessage,
      nameError,
      phoneError,
      dateError,
      genderError,
      selectError,
      fileError,
      checkboxError,
    } = this.state;

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
          {nameError && <div className={styles.form_erroe_message}>{nameError}</div>}
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
          {phoneError && <div className={styles.form_erroe_message}>{phoneError}</div>}
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
          {dateError && <div className={styles.form_erroe_message}>{dateError}</div>}
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
          {genderError && <div className={styles.form_erroe_message}>{genderError}</div>}
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
          {selectError && <div className={styles.form_erroe_message}>{selectError}</div>}
        </label>
        <label>
          <div className={styles.from_name}>Avatar:*</div>
          <input className={styles.form_file} type="file" name="file" ref={this.file} />
          {fileError && <div className={styles.form_erroe_message}>{fileError}</div>}
        </label>
        <label>
          <input className={styles.form_checkbox} type="checkbox" ref={this.checkbox} />I consent to
          my personal data*
          {checkboxError && <div className={styles.form_erroe_message}>{checkboxError}</div>}
        </label>
        <button type="submit">Submit</button>
        {submitMessage && <div className={styles.form_message}>The data has been saved</div>}
      </form>
    );
  }
}

export default Form;
