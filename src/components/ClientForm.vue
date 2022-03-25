<script setup>
import { reactive } from "vue";
import PersonalFields from "./form/PersonalFields.vue";
import AdressFields from "./form/AdressFields.vue";
import DocumentFields from "./form/DocumentFields.vue";
import SuccessDisplay from "./form/SuccessDisplay.vue";
const state = reactive({
  currentStep: 1,
});
const goToNextStep = () => {
  state.currentStep += 1;
};
</script>

<template>
  <div class="col-8 card">
    <header class="card-title">
      <h1>Создать клиента</h1>
    </header>

    <main class="card-body">
      <PersonalFields
        @step-completed="goToNextStep"
        v-if="state.currentStep === 1"
      />
      <AdressFields
        @step-completed="goToNextStep"
        v-if="state.currentStep === 2"
      />
      <DocumentFields
        @step-completed="goToNextStep"
        v-if="state.currentStep === 3"
      />
      <SuccessDisplay v-if="state.currentStep === 4" />
    </main>
  </div>
</template>
