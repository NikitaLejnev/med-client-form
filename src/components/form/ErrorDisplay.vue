<script setup>
import { v$ } from '../../utils/validate'
</script>

<template>
  <p v-for="error of v$.$errors" :key="error.$uid">
    <strong>{{ error.$message }}</strong>
  </p>
</template>