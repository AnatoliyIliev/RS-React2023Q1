import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name
          <input type="text" placeholder="Name" autoFocus />
        </label>
        <label>
          Phone number
          <input type="tel" placeholder="Phone number" />
        </label>
        <label>
          <input type="date" />
        </label>
        <label htmlFor="male">
          Male
          <input type="radio" id="male" name="gengerChoice" autoComplete="off" />
        </label>
        <label htmlFor="female">
          Female
          <input type="radio" id="female" name="gengerChoice" autoComplete="off" />
        </label>
        <label>
          <input type="checkbox" />I consent to my personal data
        </label>
        <label>
          File
          <input type="file" />
        </label>
      </form>
    );
  }
}

export default Form;
