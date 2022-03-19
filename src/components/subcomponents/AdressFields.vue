<script setup></script>

<template>
  <div class="field">
    <label for="zip-code">Индекс</label>
    <input type="text" id="zip-code" name="zip-code" />
  </div>
  <div class="field">
    <label for="country">Страна</label>
    <input type="text" id="country" name="country" />
  </div>
  <div class="field">
    <label for="region">Область</label>
    <input type="text" id="region" name="region" />
  </div>
  <div class="field">
    <label for="city">Город</label>
    <input type="text" id="city" name="city" required />
  </div>
  <div class="field">
    <label for="street">Улица</label>
    <input type="text" id="street" name="street" />
  </div>
  <div class="field">
    <label for="house">Дом</label>
    <input type="text" id="house" name="house" />
  </div>
</template>