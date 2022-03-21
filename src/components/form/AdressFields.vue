<script setup>
import { state } from '../../utils/store'
import { adressFields } from '../../utils/helpers'
import TextField from './TextField.vue';
</script>

<template>
  <div v-for="field in adressFields" :key="field.id">
    <TextField v-bind="field" v-model="state[field.property]">{{ field.label }}</TextField>
  </div>
</template>