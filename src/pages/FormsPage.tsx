import { Component } from 'react';
import Heading from '../components/Heading';
import Form from '../components/Form';
import FormCard from '../components/FormCards';

import { CardForm, StateForm, PropsFrom } from '../types';

class FormsPage extends Component<PropsFrom, StateForm> {
  state = {
    formCards: [],
  };

  onSubmitForm = (addNewCard: CardForm) => {
    this.setState((prevState) => ({ formCards: [addNewCard, ...prevState.formCards] }));
  };

  render() {
    const { formCards } = this.state;

    return (
      <>
        <Heading>Form</Heading>
        <Form onSubmitForm={this.onSubmitForm} />
        {formCards.length > 0 && <FormCard formCards={formCards} />}
      </>
    );
  }
}

export default FormsPage;
