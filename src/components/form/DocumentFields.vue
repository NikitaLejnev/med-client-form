<script setup>
import { state } from '../../utils/store'
import TextField from './TextField.vue';
const fields = [
  { label: 'Серия', property: 'serialNumber', id: 'serial-number' },
  { label: 'Номер', property: 'documentNumber', id: 'document-number' },
  { label: 'Кем выдан', property: 'issuer', id: 'issuer' },
]
</script>

<template>
  <div class="input-group">
    <label class="form-label" for="document-type">Тип документа</label>
    <select id="document-type" v-model="state.documentType">
      <option value>--Пожалуйста выберите тип документа</option>
      <option value="passport">Паспорт</option>
      <option value="birth-certificate">Свидетельство о рождении</option>
      <option value="driver-license">Водительское удостоверение</option>
    </select>
  </div>
  <div v-for="field in fields" :key="field.id">
    <TextField v-bind="field" v-model="state[field.property]">{{ field.label }}</TextField>
  </div>
  <div class="input-group">
    <label class="form-label" for="issue-date">Дата выдачи</label>
    <input type="date" v-model="state.issueDate" id="issue-date" />
  </div>
</template>