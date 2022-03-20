<script setup>
const props = defineProps(['state'])
</script>

<template>
  <div class="field">
    <label for="zip-code">Индекс</label>
    <input v-model="props.state.zipCode" id="zip-code" />
  </div>
  <div class="field">
    <label for="country">Страна</label>
    <input id="country" v-model="props.state.country" />
  </div>
  <div class="field">
    <label for="region">Область</label>
    <input id="region" v-model="props.state.region" />
  </div>
  <div class="field">
    <label for="city">Город</label>
    <input id="city" v-model="props.state.city" />
  </div>
  <div class="field">
    <label for="street">Улица</label>
    <input id="street" v-model="props.state.street" />
  </div>
  <div class="field">
    <label for="house">Дом</label>
    <input v-model="props.state.house" id="house" />
  </div>
</template>