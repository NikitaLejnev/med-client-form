<script setup>
import { v$ } from '../../utils/validate'
</script>

<template>
  <div class="alert alert-danger" v-for="error of v$.$errors" :key="error.$uid">
    <strong>{{ error.$message }}</strong>
  </div>
</template>