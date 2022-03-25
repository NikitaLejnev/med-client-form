<script setup>
import { state } from "../../store/personalFields";
import { personalFields } from "../../utils/helpers";
import { v$ } from "../../validations/personalFields";
import TextField from "./form-components/TextField.vue";
import DateInput from "./form-components/DateInput.vue";
import ErrorDisplay from "./form-components/ErrorDisplay.vue";
import NextStepButton from "./form-components/NextStepButton.vue";
const emit = defineEmits(["stepCompleted"]);
</script>

<template>
  <header>
    <h2>Личные данные</h2>
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
      <div v-for="field in personalFields" :key="field.id">
        <TextField :v$="v$" v-bind="field" v-model="state[field.property]">{{
          field.label
        }}</TextField>
      </div>
      <DateInput
        :v$="v$"
        id="birth-date"
        v-model="state.birthDate"
        property="birthDate"
        >Дата рождения</DateInput
      >
      <div class="input-group">
        <label for="phone-number">Номер телефона</label>
        <input
          class="text-field"
          type="tel"
          v-model="state.phoneNumber"
          id="phone-number"
        />
      </div>
      <ErrorDisplay :v$="v$" property="phoneNumber" />
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          v-model="state.gender"
          id="male"
          value="male"
        />
        <label class="form-check-label" for="male">Мужчина</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          v-model="state.gender"
          id="female"
          value="female"
        />
        <label class="form-check-label" for="female">Женщина</label>
      </div>
      <div class="input-group">
        <label class="select-label" for="client-group">Группа клиентов</label>
        <select
          class="input-select-multiple"
          v-model="state.clientGroup"
          id="client-group"
          multiple
        >
          <option value="vip">VIP</option>
          <option value="problem">Проблемные</option>
          <option value="oms">ОМС</option>
        </select>
      </div>
      <ErrorDisplay :v$="v$" property="clientGroup" />
      <div class="input-group">
        <label class="select-label" for="doctor">Лечащий врач</label>
        <select v-model="state.doctor" id="doctor" name="doctor">
          <option value="ivanov">Иванов</option>
          <option value="zaharov">Захаров</option>
          <option value="chernysheva">Чернышева</option>
        </select>
      </div>
      <div class="input-group">
        <label for="no-sms">Не отправлять СМС</label>
        <input
          class="checkbox"
          type="checkbox"
          v-model="state.noSms"
          id="no-sms"
          value="true"
        />
      </div>
      <NextStepButton :v$="v$">Далее</NextStepButton>
    </form>
  </main>
</template>
