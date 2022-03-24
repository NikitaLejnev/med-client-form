<script setup>
import ErrorDisplay from "./ErrorDisplay.vue";
defineProps(["id", "modelValue", "property", "label"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <label :for="id">
      {{ label }}
    </label>
    <input
      class="text-field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    />
  </div>
  <ErrorDisplay :property="property" />
</template>
