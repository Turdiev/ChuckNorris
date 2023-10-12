<template>
  <main class="main">
    <div class="container">
      <div class="main__search">
        <TheInput
            v-model="searchValue"
            :length-content="getContents.length"
            :auto-focus="true"
        />
      </div>
      <div class="main__content">
        <CardsDisplay
            v-if="getContents.length "
            :contents="getContents"
        />
        <div
            v-if="!getContents.length && isSubmitting"
            class="main__text"
        >
          Nothing found
        </div>
        <div
            v-if="isLoading"
            class="main__text"
        >
          Loading...
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import TheInput from "@/components/TheInput.vue";
import {computed, onMounted, ref, watchEffect} from "vue";
import store from "@/store";
import CardsDisplay from "@/components/cards/CardsDisplay.vue";

const searchValue = ref('')

watchEffect( () => {
  if (searchValue.value) {
    store.dispatch("getJokesWhenSearching", searchValue.value)
  }
})

const getContents = computed(() => store.state.jokes)
const isSubmitting = computed(() => store.state.isSubmitting)
const isLoading = computed(() => store.state.isLoading)

onMounted(() => {

})

</script>

<style lang="scss" scoped>
.main {

  &__search {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 128px;
    margin-bottom: 100px;
  }

  &__content {
    display: flex;
    justify-content: center;
  }

  &__text {
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>