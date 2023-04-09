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

export interface MovieDetailsCard {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: { id: number; name: string; poster_path: string };
  budget: number;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [{ id: number; logo_path: number; name: string; origin_country: string }];
  production_countries: [{ iso_3166_1: string; name: string }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieCardProps {
  movieID: number;
  onClose: () => void;
}

export type PropsCard = {
  cards: Card[];
  currentCardID: (id: number) => void;
};

export interface PropsHome {
  changeQuery: (searchQuery: string) => void;
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export interface ChildrenHeading {
  children: string;
}

export interface Modal {
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
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

export enum Status {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}
