<script setup>
import { state } from '../../utils/store'
import TextField from './TextField.vue';
const fields = [
  { label: 'Индекс', property: 'zipCode', id: 'zip-code' },
  { label: 'Страна', property: 'country', id: 'country' },
  { label: 'Область', property: 'region', id: 'region' },
  { label: 'Город', property: 'city', id: 'city' },
  { label: 'Улица', property: 'street', id: 'street' },
  { label: 'Дом', property: 'house', id: 'house' },
]
</script>

<template>
  <div v-for="field in fields" :key="field.id">
    <TextField v-bind="field" v-model="state[field.property]">{{ field.label }}</TextField>
  </div>
</template>