import React, { Component, createRef } from 'react';
import styles from '../styles/Form.module.scss';

class Form extends Component {
  name: React.RefObject<HTMLInputElement>;
  phone: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  radioMale: React.RefObject<HTMLInputElement>;
  radioFemale: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  checkbox: React.RefObject<HTMLInputElement>;
  file: React.RefObject<HTMLInputElement>;
  message: React.RefObject<HTMLDivElement>;

  constructor(props: Record<string, never>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = createRef();
    this.phone = createRef();
    this.date = createRef();
    this.radioMale = createRef();
    this.radioFemale = createRef();
    this.select = createRef();
    this.checkbox = createRef();
    this.file = createRef();
    this.message = createRef();
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const { name, phone, date, radioMale, radioFemale, select, checkbox, file, message } = this;

    const currentName = (name.current as HTMLInputElement).value;
    const currentPhone = (phone.current as HTMLInputElement).value;
    const currentDate = (date.current as HTMLInputElement).value;
    const currentRadioMale = (radioMale.current as HTMLInputElement).checked;
    const currentRadioFemale = (radioFemale.current as HTMLInputElement).checked;
    const currentSelect = (select.current as HTMLSelectElement).value;
    const currentCheckbox = (checkbox.current as HTMLInputElement).checked;
    const currentFile = (file.current as HTMLInputElement).value;

    let gender = '';
    if (currentRadioMale) {
      gender = (radioMale.current as HTMLInputElement).alt;
    } else if (currentRadioFemale) {
      gender = (radioFemale.current as HTMLInputElement).alt;
    }

    console.log(
      currentName,
      currentPhone,
      currentDate,
      gender,
      currentSelect,
      currentCheckbox,
      currentFile
    );

    (message.current as HTMLDivElement).innerHTML = 'The data has been saved';

    setTimeout(() => {
      (message.current as HTMLDivElement).innerHTML = '';
    }, 2000);

    (name.current as HTMLInputElement).value = '';
    (phone.current as HTMLInputElement).value = '';
    (date.current as HTMLInputElement).value = '';
    (radioMale.current as HTMLInputElement).checked = false;
    (radioFemale.current as HTMLInputElement).checked = false;
    (select.current as HTMLSelectElement).value = '';
    (checkbox.current as HTMLInputElement).checked = false;
    (file.current as HTMLInputElement).value = '';
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <div className={styles.from_name}>Name:</div>
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
          <div className={styles.from_name}>Phone Number:</div>
          <input
            className={styles.form_input}
            type="tel"
            name="phone"
            ref={this.phone}
            placeholder="Phome number"
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
          />
        </label>
        <label>
          <div className={styles.from_name}>Birth Date:</div>
          <input className={styles.form_data} type="date" name="date" ref={this.date} required />
        </label>
        <label htmlFor="male">
          <div className={styles.from_name}>Gender:</div>
          <input
            // className={styles.form_radio}
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
            // className={styles.form_radio}
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
          <div className={styles.from_name}>Pick your favorite genre:</div>
          <select ref={this.select} required>
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
          <input className={styles.form_checkbox} type="checkbox" ref={this.checkbox} required />I
          consent to my personal data
        </label>
        <label>
          <div className={styles.from_name}>Avatar:</div>
          <input className={styles.form_file} type="file" ref={this.file} required />
        </label>
        <button type="submit" disabled={false}>
          Submit
        </button>
        <div className={styles.Form_message} ref={this.message}></div>
      </form>
    );
  }
}

export default Form;
