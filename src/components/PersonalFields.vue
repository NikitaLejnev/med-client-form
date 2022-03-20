<script setup>
const props = defineProps(['state'])
</script>

<template>
  <div class="field">
    <label for="first-name">Имя</label>
    <input v-model="props.state.firstName" id="first-name" spellcheck="false" />
  </div>
  <div class="field">
    <label for="last-name">Фамилия</label>
    <input v-model="props.state.lastName" id="last-name" spellcheck="false" />
  </div>
  <div class="field">
    <label for="patronym">Отчество</label>
    <input v-model="props.state.patronym" id="patronym" spellcheck="false" />
  </div>
  <div class="field">
    <label for="birth-date">Дата рождения</label>
    <input type="date" v-model="props.state.birthDate" id="birth-date" />
  </div>
  <div class="field">
    <label for="phone-number">Номер телефона</label>
    <input type="tel" v-model="props.state.phoneNumber" id="phone-number" />
  </div>
  <div class="field">
    <p>Пол</p>
    <input type="radio" v-model="props.state.gender" id="male" value="male" />
    <label for="male">Мужчина</label>
    <input type="radio" v-model="props.state.gender" id="female" value="female" />
    <label for="female">Женщина</label>
  </div>
  <div class="field">
    <label for="client-group">Группа клиентов</label>
    <select v-model="props.state.clientGroup" id="client-group" multiple>
      <option value="vip">VIP</option>
      <option value="problem">Проблемные</option>
      <option value="oms">ОМС</option>
    </select>
  </div>
  <div class="field">
    <label for="doctor">Лечащий врач</label>
    <select v-model="props.state.doctor" id="doctor" name="doctor">
      <option value>--Пожалуйста выберите лечащего врача</option>
      <option value="ivanov">Иванов</option>
      <option value="zaharov">Захаров</option>
      <option value="chernysheva">Чернышева</option>
    </select>
  </div>
  <div class="field">
    <input type="checkbox" v-model="props.state.noSms" id="no-sms" value="true" />
    <label for="no-sms">Не отправлять СМС</label>
  </div>
</template>