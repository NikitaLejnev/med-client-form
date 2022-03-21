<script setup>
import { state } from '../../utils/store'
</script>

<template>
  <div class="input-group">
    <label class="form-label" for="zip-code">Индекс</label>
    <input v-model="state.zipCode" id="zip-code" />
  </div>
  <div class="input-group">
    <label class="form-label" for="country">Страна</label>
    <input id="country" v-model="state.country" />
  </div>
  <div class="input-group">
    <label class="form-label" for="region">Область</label>
    <input id="region" v-model="state.region" />
  </div>
  <div class="input-group">
    <label class="form-label" for="city">Город</label>
    <input id="city" v-model="state.city" />
  </div>
  <div class="input-group">
    <label class="form-label" for="street">Улица</label>
    <input id="street" v-model="state.street" />
  </div>
  <div class="input-group">
    <label class="form-label" for="house">Дом</label>
    <input v-model="state.house" id="house" />
  </div>
</template>