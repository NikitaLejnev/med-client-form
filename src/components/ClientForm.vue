<script setup>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { rules } from '../utils/validate'
import PersonalFields from './PersonalFields.vue';

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
      <div class="field">
        <label for="zip-code">Индекс</label>
        <input v-model="state.zipCode" id="zip-code" />
      </div>
      <div class="field">
        <label for="country">Страна</label>
        <input id="country" v-model="state.country" />
      </div>
      <div class="field">
        <label for="region">Область</label>
        <input id="region" v-model="state.region" />
      </div>
      <div class="field">
        <label for="city">Город</label>
        <input id="city" v-model="state.city" />
      </div>
      <div class="field">
        <label for="street">Улица</label>
        <input id="street" v-model="state.street" />
      </div>
      <div class="field">
        <label for="house">Дом</label>
        <input v-model="state.house" id="house" />
      </div>
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