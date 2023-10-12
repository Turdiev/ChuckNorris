<template>
  <div class="card-display">
    <Card
      v-for="(card, index) in contents"
      :key="card.id"
      :card="card"
      :idx="index"
    />
  </div>
</template>

<script setup>

import Card from "@/components/cards/Card.vue";

defineProps({
  contents: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.card-display {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @include respond-to(mobile) {

  }
}
</style>