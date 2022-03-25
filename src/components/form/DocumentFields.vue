<script setup>
import { documentFields } from "../../utils/helpers";
import { state } from "../../store/documentFields";
import { v$ } from "../../validations/documentFields";
import TextField from "./TextField.vue";
import DateInput from "./DateInput.vue";
import ErrorDisplay from "./ErrorDisplay.vue";
import NextStepButton from "./NextStepButton.vue";
</script>

<template>
  <header>
    <h2>Документ</h2>
  </header>
  <main>
    <form
      @submit.prevent="
        async () => {
          await this.v$.$validate();
        }
      "
    >
      <div class="input-group">
        <label class="select-label" for="document-type">Тип документа</label>
        <select id="document-type" v-model="state.documentType">
          <option value="passport">Паспорт</option>
          <option value="birth-certificate">Свидетельство о рождении</option>
          <option value="driver-license">Водительское удостоверение</option>
        </select>
      </div>
      <ErrorDisplay :v$="v$" property="documentType" />
      <div v-for="field in documentFields" :key="field.id">
        <TextField :v$="v$" v-bind="field" v-model="state[field.property]">{{
          field.label
        }}</TextField>
      </div>
      <DateInput
        :v$="v$"
        id="issue-date"
        v-model="state.issueDate"
        property="issueDate"
        >Дата выдачи</DateInput
      >
      <NextStepButton :v$="v$">Зарегистрировать</NextStepButton>
    </form>
  </main>
</template>
