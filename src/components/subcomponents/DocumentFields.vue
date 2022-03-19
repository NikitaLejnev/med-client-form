<script setup></script>

<template>
  <div class="field">
    <label for="doc-type">Тип документа</label>
    <select id="doc-type" name="doc-type" required>
      <option value>--Пожалуйста выберите тип документа</option>
      <option value="passport">Паспорт</option>
      <option value="birth-certificate">Свидетельство о рождении</option>
      <option value="driver-license">Водительское удостоверение</option>
    </select>
  </div>
  <div class="field">
    <label for="serial-number">Серия</label>
    <input type="text" id="serial-number" name="serial-number" />
  </div>
  <div class="field">
    <label for="issuer">Кем выдан</label>
    <input type="text" id="issuer" name="issuer" />
  </div>
  <div class="field">
    <label for="issue-date">Дата выдачи</label>
    <input type="date" id="issue-date" name="issue-date" required />
  </div>
</template>