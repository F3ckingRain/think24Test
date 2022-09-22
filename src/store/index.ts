import { createStore } from "vuex";
import LogoBook1 from "@/assets/images/Book1.svg";
import LogoBook2 from "@/assets/images/Book2.svg";
import LogoBook3 from "@/assets/images/Book3.svg";
import LogoBook4 from "@/assets/images/Book4.svg";
import LogoBook5 from "@/assets/images/Book5.svg";
import LogoBook6 from "@/assets/images/Book6.svg";

import { IBook, ICard } from "@/types/Interface";
interface Store {
  books: IBook[];
  cards: ICard[];
  isChecked: boolean;
}

export default createStore<Store>({
  state: {
    books: [
      {
        src: LogoBook1.toString(),
        name: "Русские народные сказки",
        type: true,
        id: 1,
        onCard: false,
      },
      {
        src: LogoBook2.toString(),
        name: "Русские народные песни",
        type: true,
        id: 2,
        onCard: false,
      },
      {
        src: LogoBook3.toString(),
        name: "Питер пен",
        type: false,
        id: 3,
        onCard: false,
      },
      {
        src: LogoBook4.toString(),
        name: "Пословицы и поговорки",
        type: true,
        id: 4,
        onCard: false,
      },
      {
        src: LogoBook5.toString(),
        name: "Что такое родина?",
        type: true,
        id: 5,
        onCard: false,
      },
      {
        src: LogoBook6.toString(),
        name: "Рассказы о детях",
        type: false,
        id: 6,
        onCard: false,
      },
    ],
    cards: [
      {
        id: 1,
        type: true,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 2,
        type: false,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 3,
        type: true,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 4,
        type: false,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 5,
        type: true,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 6,
        type: false,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 7,
        type: true,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 8,
        type: false,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 9,
        type: true,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 10,
        type: false,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 11,
        type: true,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
      {
        id: 12,
        type: false,
        withBook: false,
        bookId: undefined,
        isCorrect: undefined,
      },
    ],
    isChecked: false,
  },
  getters: {
    getBooks(state) {
      return state.books;
    },
    getCards(state) {
      return state.cards;
    },
    getIsChecked(state) {
      return state.isChecked;
    },
  },
  mutations: {
    setBooks(state, payload) {
      state.books = payload;
    },
    setBook(state, payload) {
      const index = state.books.findIndex((el) => el.id === payload.id);
      state.books[index].onCard = payload.onCard;
    },
    setCardWithBook(state, payload) {
      const index = state.cards.findIndex((el) => el.id === payload.id);
      state.cards[index].withBook = payload.book;
      state.cards[index].bookId = payload.bookId;
    },
    setIsChecked(state, payload) {
      state.isChecked = payload;
    },
    resetStore(state) {
      state.books.forEach((el) => (el.onCard = false));
      state.cards.forEach((el) => (el.bookId = undefined));
      state.cards.forEach((el) => (el.withBook = false));
    },
  },
  actions: {},
  modules: {},
});
