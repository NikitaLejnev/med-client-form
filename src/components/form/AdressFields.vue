<script setup>
import { state } from "../../utils/store";
import { adressFields } from "../../utils/helpers";
import { v$ } from "../../validations/adressFields";
import TextField from "./TextField.vue";
import NextStepButton from "./NextStepButton.vue";
</script>

<template>
  <header>
    <h2>Адрес</h2>
  </header>
  <main>
    <form
      @submit.prevent="
        async () => {
          await this.v$.$validate();
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
