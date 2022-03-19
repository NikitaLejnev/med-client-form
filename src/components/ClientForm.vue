<script setup>
</script>

<template>
  <header>
    <h1>Создать клиента</h1>
  </header>

  <main>
    <div class="field">
      <label for="first-name">Имя</label>
      <input type="text" id="first-name" name="first-name" spellcheck="false" required />
    </div>
    <div class="field">
      <label for="last-name">Фамилия</label>
      <input type="text" id="last-name" name="last-name" spellcheck="false" required />
    </div>
    <div class="field">
      <label for="patronym">Отчество</label>
      <input type="text" id="patronym" name="patronym" spellcheck="false" />
    </div>
    <div class="field">
      <label for="birth-date">Дата рождения</label>
      <input type="date" id="birth-date" name="birth-date" required />
    </div>
    <div class="field">
      <label for="phone">Номер телефона</label>
      <input type="tel" value="7" id="phone" name="phone" required />
    </div>
    <div class="field">
      <p>Пол</p>
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">Мужчина</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Женщина</label>
    </div>
    <div class="field">
      <label for="client-group">Группа клиентов</label>
      <select id="client-group" name="client-group" multiple required>
        <option value="vip">VIP</option>
        <option value="problem">Проблемные</option>
        <option value="oms">ОМС</option>
      </select>
    </div>
    <div class="field">
      <label for="doctor">Лечащий врач</label>
      <select id="doctor" name="doctor">
        <option value>--Пожалуйста выберите лечащего врача</option>
        <option value="ivanov">Иванов</option>
        <option value="zaharov">Захаров</option>
        <option value="chernysheva">Чернышева</option>
      </select>
    </div>
    <div class="field">
      <input type="checkbox" id="no-sms" name="no-sms" value="true" />
      <label for="no-sms">Не отправлять СМС</label>
    </div>
  </main>
</template>