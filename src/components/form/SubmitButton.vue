<script setup>
import { computed } from "vue";
import { v$ } from "../../utils/validate";
const isDisabled = computed(() => v$.value.$errors.length > 0);
</script>

<template>
  <button class="btn-success" :disabled="isDisabled">Создать</button>
</template>
