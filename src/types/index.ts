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

export interface StateHome {
  // status: StateStatus;
  // error: IError;
  currentQuery: string;
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export interface ChildrenHeading {
  children: string;
}

export interface PropSeach {
  submitProps: (searchQuery: string) => void;
  currentQuery: string;
}

export enum StateStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
}

export interface IError {
  message: string;
}

export interface StateSeach {
  searchQuery: string;
}
