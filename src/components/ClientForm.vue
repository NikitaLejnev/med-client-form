<script setup>
import PersonalDataFields from './subcomponents/PersonalDataFields.vue';
import AdressFields from './subcomponents/AdressFields.vue';
</script>

<template>
  <header>
    <h1>Создать клиента</h1>
  </header>

  <main>
    <PersonalDataFields />
    <AdressFields />
  </main>
</template>