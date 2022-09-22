<template>
  <div
    :class="[
      $style.checkBox,
      isChecked && (isCorrect ? $style.correct : $style.incorrect),
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  isChecked: boolean;
  cardType: boolean;
  bookType: boolean;
}
const props = defineProps<Props>();
const isCorrect = props.cardType === props.bookType;
</script>

<style lang="scss" module>
.checkBox {
  border-left: 2px solid #0c6ed6;
  box-shadow: 0 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 12px;
  background-position: top 4px right 4px;
}
.correct {
  border-left: 2px solid #46b755;
  background-image: url("@/assets/images/Success.svg");
  background-repeat: no-repeat;
}

.incorrect {
  border-left: 2px solid #f93232;
  background-image: url("@/assets/images/Error.svg");
  background-repeat: no-repeat;
}
</style>
