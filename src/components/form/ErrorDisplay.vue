<script setup>
import { v$ } from "../../utils/validate";
defineProps(["property"]);
</script>

<template>
  <div v-if="v$[property]?.$errors">
    <div
      class="alert alert-danger"
      v-for="error of v$[property].$errors"
      :key="error.$uid"
    >
      <strong>{{ error.$message }}</strong>
    </div>
  </div>
</template>
