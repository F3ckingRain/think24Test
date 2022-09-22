<template>
  <div class="cardContainer">
    <div class="cardTable">
      <div
        v-for="(card, index) in props.cards"
        :key="`${card}_${index}`"
        class="cardItem"
      >
        <CardWithBook
          v-if="card.withBook"
          :isChecked="isChecked"
          :cardType="card.type"
          :bookType="props.books.find((el) => el.id === card.bookId).type"
        >
          <BookItem
            :book-src="props.books.find((el) => el.id === card.bookId).src"
            :onCard="props.books.find((el) => el.id === card.bookId).onCard"
          />
        </CardWithBook>
        <EmptyBookItem v-else :cardId="card.id" @onDrop="onDrop" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmptyBookItem from "@/components/BooksComponents/EmptyBookItem.vue";
import { IBook, ICard } from "@/types/Interface";
import { computed, defineProps } from "vue";
import CardWithBook from "@/components/CardsComponents/CardWithBook.vue";
import BookItem from "@/components/BooksComponents/BookItem.vue";
import { useStore } from "vuex";
interface Props {
  cards: ICard[];
  books: IBook[];
}
const store = useStore();
const props = defineProps<Props>();
const isChecked = computed(() => store.getters.getIsChecked);
const setBook = (bookId: number) => {
  store.commit("setBook", { id: bookId, onCard: true });
};
const setCardWithBook = (bookId: number, cardId: number) => {
  store.commit("setCardWithBook", {
    id: cardId,
    book: true,
    bookId: bookId,
  });
};
function onDrop(e: DragEvent, id: number) {
  if (!e.dataTransfer) return;
  const bookId = Number(e.dataTransfer.getData("bookId"));
  setBook(bookId);
  setCardWithBook(bookId, id);
}
</script>

<style lang="scss">
.cardContainer {
  width: 50%;
}
.cardTable {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, min(284px));
  grid-column-gap: 48px;
  grid-row-gap: 12px;
}
.cardItem {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
