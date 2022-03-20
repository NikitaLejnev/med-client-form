<script setup>
import useVuelidate from '@vuelidate/core'
import { v$ } from '../utils/validate'
import PersonalFields from './PersonalFields.vue';
import AdressFields from './AdressFields.vue';
import DocumentFields from './DocumentFields.vue';
import SubmitButton from './SubmitButton.vue';

</script>

<template>
  <header>
    <h1>Создать клиента</h1>
  </header>

  <main>
    <form @submit.prevent="async () => { await this.v$.$validate() }">
      <p v-for="error of v$.$errors" :key="error.$uid">
        <strong>{{ error.$message }}</strong>
      </p>
      <PersonalFields />
      <AdressFields />
      <DocumentFields />
      <SubmitButton />
    </form>
  </main>
</template>