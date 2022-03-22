<script setup>
import ErrorDisplay from "./ErrorDisplay.vue";
defineProps(["id", "modelValue", "property"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <label :for="id">
      <slot>{{ labelName }}</slot>
    </label>
    <input
      class="text-field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    />
    <ErrorDisplay :property="property" />
  </div>
</template>
