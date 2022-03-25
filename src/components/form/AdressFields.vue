<script setup>
import { state } from "../../store/adressFields";
import { adressFields } from "../../utils/helpers";
import { v$ } from "../../validations/adressFields";
import TextField from "./TextField.vue";
import NextStepButton from "./NextStepButton.vue";
const emit = defineEmits(["stepCompleted"]);
</script>

<template>
  <header>
    <h2>Адрес</h2>
  </header>
  <main>
    <form
      @submit.prevent="
        async () => {
          const isValid = await this.v$.$validate();
          if (!isValid) {
            return;
          }
          emit('stepCompleted');
        }
      "
    >
      <div v-for="field in adressFields" :key="field.id">
        <TextField :v$="v$" v-bind="field" v-model="state[field.property]">{{
          field.label
        }}</TextField>
      </div>
      <NextStepButton :v$="v$">Далее</NextStepButton>
    </form>
  </main>
</template>
