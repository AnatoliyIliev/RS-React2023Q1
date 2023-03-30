/* eslint-disable @typescript-eslint/no-unused-vars */
export const nameValidation = (currentName: string) => {
  let nameError = '';
  const nameTest = /^[A-Z]/.test(currentName);

  if (currentName.trim() === '') {
    return (nameError = 'Enter something');
  } else if (!nameTest) {
    return (nameError = 'The name can only contain letters, an apostrophe, a dash, and spaces');
  }
  return (nameError = '');
};

export const phoneValidation = (currentPhone: string) => {
  const phoneTest =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(currentPhone);

  let phoneError = '';

  if (currentPhone.trim() === '') {
    return (phoneError = 'Enter something');
  } else if (!phoneTest) {
    return (phoneError = 'The phone number must be numbers');
  }
  return (phoneError = '');
};

export const dateValidation = (currentDate: string) => {
  let dateError = '';

  if (currentDate === '') {
    return (dateError = 'Please enter the date of birth.');
  }
  return (dateError = '');
};

export const genderValidation = (currentRadioMale: boolean, currentRadioFemale: boolean) => {
  let genderError = '';

  if (!currentRadioMale && !currentRadioFemale) {
    return (genderError = 'Choose your gender.');
  }
  return (genderError = '');
};

export const ganreValidation = (currentSelect: string) => {
  let selectError = '';

  if (currentSelect === '') {
    return (selectError = 'Choose your favorite ganre.');
  }
  return (selectError = '');
};

export const fileValidation = (file: React.RefObject<HTMLInputElement>) => {
  let fileError = '';

  const fileImg = file.current?.files?.[0];

  if (!fileImg) {
    return (fileError = 'Add your avatar');
  } else if (fileImg && /\.(jpe?g|png|gif)$/i.test(fileImg.name) === false) {
    return (fileError = 'File must be .jpeg, .jpg, .png, .gif');
  }
  return (fileError = '');
};

export const checkboxValidation = (currentCheckbox: boolean) => {
  let checkboxError = '';

  if (!currentCheckbox) {
    return (checkboxError = 'Agree consent to my personal data');
  }
  return (checkboxError = '');
};
