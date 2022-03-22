<script setup>
defineProps(['id', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-group">
    <label :for="id">
      <slot>{{ labelName }}</slot>
    </label>
    <input
      type="date"
      class="date-field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    />
  </div>
</template>