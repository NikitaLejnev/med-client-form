<script setup>
import useVuelidate from '@vuelidate/core'
import { v$ } from '../utils/validate'
import PersonalFields from './form/PersonalFields.vue';
import AdressFields from './form/AdressFields.vue';
import DocumentFields from './form/DocumentFields.vue';
import SubmitButton from './form/SubmitButton.vue';
import ErrorDisplay from './form/ErrorDisplay.vue';

</script>

<template>
  <header>
    <h1>Создать клиента</h1>
  </header>

  <main>
    <form @submit.prevent="async () => { await this.v$.$validate() }">
      <ErrorDisplay />
      <PersonalFields />
      <AdressFields />
      <DocumentFields />
      <SubmitButton />
    </form>
  </main>
</template>