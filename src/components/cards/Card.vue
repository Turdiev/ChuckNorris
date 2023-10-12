<template>
  <a
      :href="card.url"
      class="card"
      :class="{'_big': idx < 2, '_small': idx >= 2}"
      target="_blank"
  >
    <div class="card__text">
      {{ card.value }}}}
    </div>
    <div class="card__bottom">
      <p>{{ card.id }}</p>
      <p>{{ useFormatDate(card.updated_at) }}</p>
    </div>
  </a>
</template>

<script setup>
import useFormatDate from "@/use/FormatDate";

defineProps({
  card: {
    type: Object
  },
  idx: Number
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 7px 25px 0 #64646F33;
  padding: 40px;
  margin: 5px;

  @include respond-to(mobile) {
    padding: 20px;
  }

  &._big {
    flex-basis: calc(50% - 10px);
    min-height: 262px;

    @include respond-to(tablet) {
      flex-basis: 100%;
    }
  }

  &._small {
    flex-basis: calc(33.33% - 10px);
    min-height: 150px;

    @include respond-to(tablet) {
      flex-basis: calc(50% - 10px);
    }

    @include respond-to(mobile) {
      flex-basis: 100%;
    }
  }

  &__text {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0;
    overflow: hidden;
    margin-bottom: 8px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;

    @include respond-to(mobile) {
      flex-wrap: wrap;
      gap: 10px;
    }

    & p {
      font-family: $font-second;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0;
      text-align: left;
    }
  }
}
</style>