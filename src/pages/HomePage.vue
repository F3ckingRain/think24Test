<template>
  <div :class="$style.home">
    <div :class="$style.homePage">
      <div :class="$style.homeWrapper">
        <div :class="$style.homeWrapper__header">В мире книг</div>
        <div :class="$style.homeWrapper__instruction">
          <div :class="$style.instruction__title">Инструкция</div>
          <div :class="$style.instruction__content">
            Распредели книги, ориентируясь на названия, по соответствующим
            рубрикам таблицы: "Жарны фольклора", "Не являются жанрами фольклора"
          </div>
        </div>
        <CustomButton text="Продолжить" @clickHandler="navigate" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "@/UIkit/CustomButton/CustomButton.vue";
import router from "@/router";
const navigate = () => {
  router.push("/about");
};
</script>
<style lang="scss" module>
.home {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
.homePage {
  background-color: #fff;
  padding: 60px 317px;
}
.homeWrapper {
  min-width: 0.65vw;
  display: flex;
  flex-direction: column;
  gap: 36px;

  &__header {
    color: #8bd74b;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: start;
  }
  &__instruction {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: start;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 22px 36px;
  }
}

.instruction {
  &__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
  &__content {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }
}
</style>
