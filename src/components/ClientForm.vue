<script setup>
import { reactive } from "vue";
import PersonalFields from "./field-groups/PersonalFields.vue";
import AdressFields from "./field-groups/AdressFields.vue";
import DocumentFields from "./field-groups/DocumentFields.vue";
import SuccessDisplay from "./field-groups/SuccessDisplay.vue";
import RequiredIndicator from "./field-groups/form-components/RequiredIndicator.vue";
const state = reactive({
  currentStep: 1,
});
const goToNextStep = () => {
  state.currentStep += 1;
};
</script>

<template>
  <div class="col-8-m col-12-s card">
    <header class="card-title">
      <h1>Создать клиента</h1>
    </header>

    <main class="card-body">
      <small><RequiredIndicator />- поле обязательно к заполнению</small>
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
