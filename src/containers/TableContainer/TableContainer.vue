<template>
  <div class="tableContainer">
    <div class="header">
      <div class="header__titleTrue">Жанры фольклора</div>
      <div class="header__titleFalse">Не являются жанрами фольклора</div>
    </div>
    <div class="tableWrapper">
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
import BooksTable from "@/containers/TableContainer/BooksTable.vue";
import { IBook, ICard } from "@/types/Interface";
import CardContainer from "@/containers/TableContainer/CardContainer.vue";
interface Props {
  books: IBook[];
  cards: ICard[];
  isChecked: boolean;
}
const props = defineProps<Props>();
</script>

<style lang="scss">
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
  &__titleTrue {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 285px;
    grid-row-start: 1;
    grid-column-start: 3;
    grid-column-end: 3;
  }
  &__titleFalse {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 285px;
    grid-row-start: 1;
    grid-column-start: 4;
  }
}
</style>
