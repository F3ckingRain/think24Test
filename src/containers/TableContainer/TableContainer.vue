<template>
  <div :class="$style.tableContainer">
    <div :class="$style.header">
      <div :class="$style.header__title">Жанры фольклора</div>
      <div :class="$style.header__title">Не являются жанрами фольклора</div>
    </div>
    <div :class="$style.tableWrapper">
      <BooksTable
        :active-books="props.books.filter((el) => !el.onCard)"
        :is-checked="props.isChecked"
      />
      <CardContainer :cards="props.cards" :books="props.books" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import BooksTable from "@/containers/BooksTableContainer/BooksTable.vue";
import { IBook, ICard } from "@/types/Interface";
import CardContainer from "@/containers/CardContainer/CardContainer.vue";
interface Props {
  books: IBook[];
  cards: ICard[];
  isChecked: boolean;
}
const props = defineProps<Props>();
</script>

<style lang="scss" module>
.tableContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tableWrapper {
  display: flex;
  flex-direction: row;
  gap: 48px;
  width: 100%;
}
.header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 48px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  white-space: normal;
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &:first-child {
      grid-row-start: 1;
      grid-column-start: 3;
      grid-column-end: 3;
    }
    &:last-child {
      grid-row-start: 1;
      grid-column-start: 4;
    }
  }
}
</style>
