<script setup>
import ErrorDisplay from "./ErrorDisplay.vue";
defineProps(["v$", "id", "modelValue", "property"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <label :for="id">
      <slot>{{ labelName }}</slot>
    </label>
    <input
      type="date"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    />
  </div>
  <ErrorDisplay :v$="v$" :property="property" />
</template>
