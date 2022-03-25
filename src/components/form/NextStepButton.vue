<script setup>
import { computed } from "vue";
const props = defineProps(["v$"]);
const isDisabled = computed(() => props.v$.$errors.length > 0);
</script>

<template>
  <button class="btn-success" :disabled="isDisabled">
    <slot>{{ buttonText }}</slot>
  </button>
</template>
