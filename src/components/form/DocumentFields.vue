<script setup>
import { state } from '../../utils/store'
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
  <div class="input-group">
    <label class="form-label" for="serial-number">Серия</label>
    <input v-model="state.serialNumber" id="serial-number" />
  </div>
  <div class="input-group">
    <label class="form-label" for="document-number">Номер</label>
    <input v-model="state.documentNumber" id="document-number" />
  </div>
  <div class="input-group">
    <label class="form-label" for="issuer">Кем выдан</label>
    <input v-model="state.issuer" id="issuer" />
  </div>
  <div class="input-group">
    <label class="form-label" for="issue-date">Дата выдачи</label>
    <input type="date" v-model="state.issueDate" id="issue-date" />
  </div>
</template>