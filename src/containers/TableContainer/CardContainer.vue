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
          />
        </CardWithBook>
        <EmptyBookItem v-else :cardId="card.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmptyBookItem from "@/components/BooksComponents/EmptyBookItem.vue";
import { IBook, ICard } from "@/types/Interface";
import { computed, defineProps } from "vue";
import CardWithBook from "@/components/BooksComponents/CardWithBook.vue";
import BookItem from "@/components/BooksComponents/BookItem.vue";
import { useStore } from "vuex";
interface Props {
  cards: ICard[];
  books: IBook[];
}
const store = useStore();
const props = defineProps<Props>();
const isChecked = computed(() => store.getters.getIsChecked);
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
