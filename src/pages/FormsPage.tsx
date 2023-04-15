import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { addForm } from '../RTK/formSlice';

import Heading from '../components/Heading';
import Form from '../components/Form';
import FormCard from '../components/FormCards';

import { CardForm } from '../types';

function FormsPage() {
  const dispatch = useAppDispatch();
  const formCards = useAppSelector((state) => state.form);

  const onSubmitForm = (addNewCard: CardForm) => {
    dispatch(addForm(addNewCard));
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
