<script setup>
import { state } from '../../utils/store'
import { personalFields } from '../../utils/helpers'
import TextField from './TextField.vue';
</script>

<template>
  <header>
    <h2>Личные данные</h2>
  </header>
  <main>
    <div v-for="field in personalFields" :key="field.id">
      <TextField v-bind="field" v-model="state[field.property]">{{ field.label }}</TextField>
    </div>
    <div class="input-group">
      <label class="form-label" for="birth-date">Дата рождения</label>
      <input type="date" v-model="state.birthDate" id="birth-date" />
    </div>
    <div class="input-group">
      <label class="form-label" for="phone-number">Номер телефона</label>
      <input type="tel" v-model="state.phoneNumber" id="phone-number" />
    </div>
    <div class="input-group">
      <label class="form-label">Пол</label>
      <input type="radio" v-model="state.gender" id="male" value="male" />
      <label class="form-label" for="male">Мужчина</label>
      <input type="radio" v-model="state.gender" id="female" value="female" />
      <label class="form-label" for="female">Женщина</label>
    </div>
    <div class="input-group">
      <label class="form-label" for="client-group">Группа клиентов</label>
      <select v-model="state.clientGroup" id="client-group" multiple>
        <option value="vip">VIP</option>
        <option value="problem">Проблемные</option>
        <option value="oms">ОМС</option>
      </select>
    </div>
    <div class="input-group">
      <label class="form-label" for="doctor">Лечащий врач</label>
      <select v-model="state.doctor" id="doctor" name="doctor">
        <option value>--Пожалуйста выберите лечащего врача</option>
        <option value="ivanov">Иванов</option>
        <option value="zaharov">Захаров</option>
        <option value="chernysheva">Чернышева</option>
      </select>
    </div>
    <div class="input-group">
      <input type="checkbox" v-model="state.noSms" id="no-sms" value="true" />
      <label class="form-label" for="no-sms">Не отправлять СМС</label>
    </div>
  </main>
</template>