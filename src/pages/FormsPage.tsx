import { useState } from 'react';
import Heading from '../components/Heading';
import Form from '../components/Form';
import FormCard from '../components/FormCards';

import { CardForm } from '../types';

function FormsPage() {
  const [cards, setCards] = useState<CardForm[]>([]);

  const onSubmitForm = (addNewCard: CardForm) => {
    setCards((prevState) => [addNewCard, ...prevState]);
  };

  return (
    <>
      <Heading>Form</Heading>
      <Form onSubmitForm={onSubmitForm} />
      {cards.length > 0 && <FormCard formCards={cards} />}
    </>
  );
}

export default FormsPage;
