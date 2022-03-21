<script setup>
import { state } from '../../utils/store'
import TextField from './TextField.vue';
import { documentFields } from '../../utils/helpers'
</script>

<template>
  <header>
    <h2>Документ</h2>
  </header>
  <main>
    <div class="input-group">
      <label class="select-label" for="document-type">Тип документа</label>
      <select id="document-type" v-model="state.documentType">
        <option value="passport">Паспорт</option>
        <option value="birth-certificate">Свидетельство о рождении</option>
        <option value="driver-license">Водительское удостоверение</option>
      </select>
    </div>
    <div v-for="field in documentFields" :key="field.id">
      <TextField v-bind="field" v-model="state[field.property]">{{ field.label }}</TextField>
    </div>
    <div class="input-group">
      <label for="issue-date">Дата выдачи</label>
      <input class="text-field" type="date" v-model="state.issueDate" id="issue-date" />
    </div>
  </main>
</template>