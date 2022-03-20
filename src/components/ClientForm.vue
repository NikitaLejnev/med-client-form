<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { rules } from '../utils/validate'
import PersonalFields from './PersonalFields.vue';
import AdressFields from './AdressFields.vue';
import DocumentFields from './DocumentFields.vue';

const state = reactive({
  firstName: '',
  lastName: '',
  patronym: '',
  birthDate: '',
  phoneNumber: '7',
  gender: undefined,
  clientGroup: [],
  doctor: undefined,
  noSms: false,
  zipCode: undefined,
  country: '',
  region: '',
  city: '',
  street: '',
  house: undefined,
  documentType: undefined,
  serialNumber: undefined,
  documentNumber: undefined,
  issuer: '',
  issueDate: undefined,
})

const v$ = useVuelidate(rules, state, { $autoDirty: true })

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
      <PersonalFields :state="state" />
      <AdressFields :state="state" />
      <DocumentFields :state="state" />
      <button>Создать</button>
    </form>
  </main>
</template>