<template>
  <div
    class="emptyCard"
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="onDropHandler($event, props.cardId)"
    :class="{ 'active-dropzone': active }"
  ></div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
interface Props {
  cardId: number;
}
const props = defineProps<Props>();
const active = ref(false);
const emits = defineEmits(["onDrop"]);
function toggleActive() {
  active.value = !active.value;
}
function onDropHandler(e: DragEvent, id: number) {
  toggleActive();
  emits("onDrop", e, id);
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
