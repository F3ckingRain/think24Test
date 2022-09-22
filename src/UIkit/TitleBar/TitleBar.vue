<template>
  <div :class="$style.titleBar">
    <div :class="$style.content" @click="$emit('navigate')">
      <button :class="$style.content__navBtn">
        <img :class="$style.btnImage" src="@/assets/images/Navig.svg" alt="" />
      </button>
      <div :class="$style.content__navText">Назад</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.titleBar {
  top: 0;
  left: 0;
  width: 100%;

  background-color: #fff;
  box-shadow: 0 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 8px;
}
.content {
  display: flex;
  width: fit-content;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  padding: 22px 0 22px 57px;
  &__navBtn {
    width: 36px;
    height: 36px;
    border: none;
    background: none;
    cursor: pointer;
  }
  &__navText {
    color: #8bd74b;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
  }
}
.btnImage {
  width: 100%;
  height: 100%;
}
</style>
