<script setup>
import ErrorDisplay from "./ErrorDisplay.vue";
import RequiredIndicator from "./RequiredIndicator.vue";
defineProps(["v$", "id", "modelValue", "property", "label", "required"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-group">
    <RequiredIndicator v-if="required" />
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
  <ErrorDisplay :v$="v$" :property="property" />
</template>
