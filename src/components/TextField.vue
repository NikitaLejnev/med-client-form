<script setup>
</script>

<template>
  <div class="text-field">
    <label for="text-field">
      <slot>{{ title }}</slot>
    </label>
    <input type="text" id="text-field" />
  </div>
</template>
