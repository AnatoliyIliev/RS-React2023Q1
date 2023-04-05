export interface Card {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type PropsCard = {
  cards: Card[];
};

export interface StateHome {
  currentQuery: string;
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export interface ChildrenHeading {
  children: string;
}

export interface CardForm {
  id: number;
  name: string;
  phone: number;
  date: string;
  gender: string;
  genre: string;
  file: string;
  agree: boolean;
}

export interface PropsFroms {
  onSubmitForm?: (addNewCard: CardForm) => void;
  formCards?: CardForm[];
}

export type StateForm = {
  submitMessage: boolean;
};

export type Inputs = {
  name: string;
  phone: number;
  date: string;
  gender: string;
  genre: string;
  file: File[];
  checkbox: boolean;
};
