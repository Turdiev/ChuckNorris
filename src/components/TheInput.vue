<template>
  <div class="input">
    <input
        ref="inputRef"
        :value="modelValue"
        placeholder="Search jokes..."
        @input="handleInput($event)"
        @blur="handleBlur"
    />
    <label v-if="lengthContent">
      Found jokes: {{ lengthContent }}
    </label>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import store from "@/store";

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: String,
  lengthContent: Number,
  autoFocus: Boolean
})

const timeout = ref(null);
const inputRef = ref(null);

const handleInput = (event) => {
  store.commit('SET_IS_SUBMITTING', false)
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    if (event.target.value.length > 3) {
      emit('update:modelValue', event.target.value)
    }
  }, 500);
}

const handleBlur = () => {
  clearTimeout(timeout.value);
}

onMounted(() => {
  if (props.autoFocus) {
    inputRef.value.focus();
  }
})

</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  max-width: 626px;
  height: 64px;

  & input {
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0;
    color: $blue;
    width: 100%;
    height: 100%;
    box-shadow: 0 7px 12px 0 #64646F33;
    border: none;
    padding: 19px 0 19px 30px;
    margin-bottom: 20px;

    &::-webkit-input-placeholder {
      color: $blue;
    }
  }

  & label {
    font-family: $font-second;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    padding-left: 38px;
  }
}
</style>