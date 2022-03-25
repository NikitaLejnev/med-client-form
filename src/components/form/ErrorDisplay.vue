<script setup>
const props = defineProps(["v$", "property"]);
</script>

<template>
  <div v-if="props.v$[property]?.$errors">
    <div
      class="alert alert-danger"
      v-for="error of v$[property].$errors"
      :key="error.$uid"
    >
      <strong>{{ error.$message }}</strong>
    </div>
  </div>
</template>
