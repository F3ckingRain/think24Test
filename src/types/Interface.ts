export interface IBook {
  src: string;
  name: string;
  type: boolean;
  id: number;
  onCard: boolean;
}
export interface ICard {
  id: number;
  type: boolean;
  withBook: boolean;
  bookId: number | undefined;
  isCorrect: boolean | undefined;
}
