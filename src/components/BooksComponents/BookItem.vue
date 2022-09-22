<template>
  <div class="wrapper">
    <div class="handler" :class="onCard ? 'dropped' : 'drag'"></div>
    <div class="bookContainer">
      <img :src="props.bookSrc" alt="" draggable="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  bookSrc: string;
  onCard?: boolean;
}
const props = defineProps<Props>();
</script>

<style lang="scss">
.wrapper {
  padding: 24px 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  box-shadow: 0 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 12px;
}

.bookContainer {
  padding: 0 29px;
}
.handler {
  height: 20px;
  width: 20px;
}
.dropped {
  background: url("@/assets/images/Icon - Drag - Hov.svg") no-repeat;
}
.drag {
  background: url("@/assets/images/Icon - Drag.svg") no-repeat;
  &:hover {
    background: url("@/assets/images/Icon - Drag - Hov.svg") no-repeat;
  }
}
.drag-wrapper {
  background: red;
}
</style>
