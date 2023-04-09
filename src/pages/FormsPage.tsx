import { useState } from 'react';
import Heading from '../components/Heading';
import Form from '../components/Form';
import FormCard from '../components/FormCards';

import { CardForm } from '../types';

function FormsPage() {
  const [formCards, setFormCards] = useState<CardForm[]>([]);

  const onSubmitForm = (addNewCard: CardForm) => {
    setFormCards((prevState) => [addNewCard, ...prevState]);
  };

  return (
    <>
      <Heading>Form</Heading>
      <Form onSubmitForm={onSubmitForm} />
      {formCards.length > 0 && <FormCard formCards={formCards} />}
    </>
  );
}

export default FormsPage;
