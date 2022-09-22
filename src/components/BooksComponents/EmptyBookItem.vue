<template>
  <div
    class="emptyCard"
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="onDrop($event, props.cardId)"
    :class="{ 'active-dropzone': active }"
  ></div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
interface Props {
  cardId: number;
}
const props = defineProps<Props>();
const active = ref(false);
const store = useStore();
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
function toggleActive() {
  active.value = !active.value;
}
function onDrop(e: DragEvent, id: number) {
  toggleActive();
  if (!e.dataTransfer) return;
  const bookId = Number(e.dataTransfer.getData("bookId"));
  setBook(bookId);
  setCardWithBook(bookId, id);
}
</script>

<style lang="scss">
.active-dropzone {
  background-color: #817d7d !important;
  animation: show 0.5s ease-in-out;
}
.emptyCard {
  width: 100%;
  height: 100%;
  max-width: calc(285px - 2px);
  background: #f2f2f2;
  border: 1px dashed #b0b2c1;
  border-radius: 12px;
}
@keyframes show {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>
