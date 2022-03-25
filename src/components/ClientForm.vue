<script setup>
import PersonalFields from "./form/PersonalFields.vue";
import AdressFields from "./form/AdressFields.vue";
import DocumentFields from "./form/DocumentFields.vue";
</script>

<template>
  <div class="col-8 card">
    <header class="card-title">
      <h1>Создать клиента</h1>
    </header>

    <main class="card-body">
      <form>
        <PersonalFields />
        <AdressFields />
        <DocumentFields />
      </form>
    </main>
  </div>
</template>
