<template>
  <button class="customBtn" @click="$emit('clickHandler')">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<style lang="scss">
.customBtn {
  width: fit-content;
  padding: 12px 52px;
  color: #fff;
  background-color: #8bd74b;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
</style>
