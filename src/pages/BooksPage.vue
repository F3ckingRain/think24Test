<template>
  <div :class="$style.page">
    <TitleBar @navigate="navigate" />
    <div :class="$style.about">
      <div :class="$style.title">В мире книг</div>
      <TableContainer :books="books" :cards="cards" :isChecked="isChecked" />
      <div :class="$style.checkBtn">
        <CustomButton
          text="Проверить"
          v-if="!isChecked"
          @clickHandler="setIsCheckedTrue"
        />
        <CustomButton text="Обновить" v-else @clickHandler="reset" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleBar from "@/UIkit/TitleBar/TitleBar.vue";
import TableContainer from "@/containers/TableContainer/TableContainer.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import CustomButton from "@/UIkit/CustomButton/CustomButton.vue";
import router from "@/router";
import { IBook } from "@/types/Interface";
const store = useStore();
const books = computed(() => store.getters.getBooks);
const cards = computed(() => store.getters.getCards);
const isChecked = computed(() => store.getters.getIsChecked);
function setIsCheckedTrue() {
  if (books.value.filter((el: IBook) => !el.onCard).length === 6) return;
  store.commit("setIsChecked", true);
}
function reset() {
  store.commit("resetStore");
  store.commit("setIsChecked", false);
}
const navigate = () => {
  router.push("/");
};
</script>
<style lang="scss" module>
.page {
  padding: 0 260px 260px;
  background-color: #ecf6e9;
  background-image: url("@/assets/images/BackgroundCat.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
}
.about {
  padding: 0 40px 32px 40px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.title {
  padding: 40px 16px;
  background: linear-gradient(90deg, #3f8cff 0.06%, #60b9a6 99.94%);
  box-shadow: 0 14px 16px rgba(12, 110, 214, 0.25);
  border-radius: 24px;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
}
.checkBtn {
  margin: 7px 0 0 17px;
  width: fit-content;
}
</style>
