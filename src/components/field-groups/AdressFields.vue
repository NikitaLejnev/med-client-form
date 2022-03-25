<script setup>
import { state } from "../../store/adressFields";
import { adressFields } from "../../utils/helpers";
import { v$ } from "../../validations/adressFields";
import TextField from "./form-components/TextField.vue";
import NextStepButton from "./form-components/NextStepButton.vue";
const emit = defineEmits(["stepCompleted"]);
async function onSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    return;
  }
  emit("stepCompleted");
}
</script>

<template>
  <header>
    <h2>Адрес</h2>
  </header>
  <main>
    <form @submit.prevent="onSubmit">
      <div v-for="field in adressFields" :key="field.id">
        <TextField :v$="v$" v-bind="field" v-model="state[field.property]">{{
          field.label
        }}</TextField>
      </div>
      <NextStepButton :v$="v$">Далее</NextStepButton>
    </form>
  </main>
</template>
