<script setup>
import { state } from "../../utils/store";
import TextField from "./TextField.vue";
import { documentFields } from "../../utils/helpers";
import DateInput from "./DateInput.vue";
import ErrorDisplay from "./ErrorDisplay.vue";
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
      <ErrorDisplay property="documentType" />
    </div>
    <div v-for="field in documentFields" :key="field.id">
      <TextField v-bind="field" v-model="state[field.property]">{{
        field.label
      }}</TextField>
    </div>
    <DateInput id="issue-date" v-model="state.issueDate" property="issueDate"
      >Дата выдачи</DateInput
    >
  </main>
</template>
