<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { rules } from '../utils/validate'
import PersonalFields from './PersonalFields.vue';
import AdressFields from './AdressFields.vue';

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
      <div class="field">
        <label for="document-type">Тип документа</label>
        <select id="document-type" v-model="state.documentType">
          <option value>--Пожалуйста выберите тип документа</option>
          <option value="passport">Паспорт</option>
          <option value="birth-certificate">Свидетельство о рождении</option>
          <option value="driver-license">Водительское удостоверение</option>
        </select>
      </div>
      <div class="field">
        <label for="serial-number">Серия</label>
        <input v-model="state.serialNumber" id="serial-number" />
      </div>
      <div class="field">
        <label for="document-number">Номер</label>
        <input v-model="state.documentNumber" id="document-number" />
      </div>
      <div class="field">
        <label for="issuer">Кем выдан</label>
        <input v-model="state.issuer" id="issuer" />
      </div>
      <div class="field">
        <label for="issue-date">Дата выдачи</label>
        <input type="date" v-model="state.issueDate" id="issue-date" />
      </div>
      <button>Создать</button>
    </form>
  </main>
</template>