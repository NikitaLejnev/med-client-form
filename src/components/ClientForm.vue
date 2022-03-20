<script setup>
import useVuelidate from '@vuelidate/core'
import { v$ } from '../utils/validate'
import PersonalFields from './PersonalFields.vue';
import AdressFields from './AdressFields.vue';
import DocumentFields from './DocumentFields.vue';
import SubmitButton from './SubmitButton.vue';
import ErrorDisplay from './ErrorDisplay.vue';

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