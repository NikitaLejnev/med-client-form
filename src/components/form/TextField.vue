<script setup>
import { reactive } from 'vue'
defineProps(['id', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-group">
    <label class="form-label" :for="id">
      <slot>{{ labelName }}</slot>
    </label>
    <input
      class="text-field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    />
  </div>
</template>