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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            autoFocus
            required
          />
        </label>
        <label>
          <div className={styles.from_name}>Phone Number:*</div>
          <input
            className={styles.form_input}
            type="tel"
            name="phone"
            ref={this.phone}
            placeholder="Phome number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
            required
          />
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
            title="Please enter the date of birth in the DD-MM-YYYY format."
            required
          />
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
            required
          />
          Male
          <input
            type="radio"
            id="male"
            alt="Female"
            name="gengerChoice"
            ref={this.radioFemale}
            autoComplete="off"
            required
          />
          Female
        </label>
        <label>
          <div className={styles.from_name}>Pick your favorite genre:*</div>
          <select ref={this.select} name="genre" required>
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
        </label>
        <label>
          <div className={styles.from_name}>Avatar:*</div>
          <input className={styles.form_file} type="file" name="file" ref={this.file} required />
        </label>
        <label>
          <input className={styles.form_checkbox} type="checkbox" ref={this.checkbox} required />I
          consent to my personal data*
        </label>
        <button type="submit">Submit</button>
        {submitMessage && <div className={styles.form_message}>The data has been saved</div>}
      </form>
    );
  }
}

export default Form;
