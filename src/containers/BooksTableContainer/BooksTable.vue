<template>
  <div class="booksTable">
    <div class="bookColumn">
      <div
        v-for="(book, index) in props.activeBooks"
        :key="`${book}_${index}`"
        class="book"
        :draggable="!props.isChecked ? 'true' : 'false'"
        @dragstart="onDragStart($event, book)"
      >
        <BookItem :bookSrc="book.src" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { IBook } from "@/types/Interface";
import BookItem from "@/components/BooksComponents/BookItem.vue";
interface Props {
  activeBooks: IBook[];
  isChecked: boolean;
}
const props = defineProps<Props>();
function onDragStart(e: DragEvent, book: IBook) {
  if (!e.dataTransfer) return;
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("bookId", book.id.toString());
}
</script>

<style lang="scss">
.booksTable {
  width: 50%;
}
.bookColumn {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(284px, 1fr));
  grid-row-gap: 12px;
  grid-column-gap: 48px;
}
.book {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
