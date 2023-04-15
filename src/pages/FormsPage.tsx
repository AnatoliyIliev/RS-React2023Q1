import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { addCards } from '../RTK/cardsSlice';

import Heading from '../components/Heading';
import Form from '../components/Form';
import FormCard from '../components/FormCards';

import { CardForm } from '../types';

function FormsPage() {
  const dispatch = useAppDispatch();
  const formCards = useAppSelector((state) => state.cards.cardForm);

  const onSubmitForm = (addNewCard: CardForm) => {
    dispatch(addCards(addNewCard));
  };

  return (
    <>
      <Heading>Form</Heading>
      <Form onSubmitForm={onSubmitForm} />
      {formCards.length > 0 && <FormCard />}
    </>
  );
}

export default FormsPage;
