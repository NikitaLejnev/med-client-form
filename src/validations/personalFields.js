import useVuelidate from "@vuelidate/core";
import {
  required,
  helpers,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";
import { state } from "../store/personalFields";
import { isValidDate, isValidPhoneNumber, isValidName } from "./validators";

const rules = {
  firstName: {
    required: helpers.withMessage("Укажите имя", required),
    isValidName: helpers.withMessage(
      "В имени должны быть только буквы",
      isValidName
    ),
  },
  lastName: {
    required: helpers.withMessage("Укажите фамилию", required),
    isValidName: helpers.withMessage(
      "В фамилии должны быть только буквы",
      isValidName
    ),
  },
  birthDate: {
    isValidDate: helpers.withMessage(
      "Укажите корректную дату рождения",
      isValidDate
    ),
  },
  phoneNumber: {
    required: helpers.withMessage("Укажите номер телефона", required),
    minLength: helpers.withMessage(
      "В номере телефона меньше 11 цифр",
      minLength(11)
    ),
    maxLength: helpers.withMessage(
      "В номере телефона больше 11 цифр",
      maxLength(11)
    ),
    isValidPhoneNumber: helpers.withMessage(
      "Номер телефона должен начинаться с цифры 7",
      isValidPhoneNumber
    ),
    numeric: helpers.withMessage(
      "Номер телефона должен содержать только цифры",
      numeric
    ),
  },
  clientGroup: {
    required: helpers.withMessage("Укажите группу клиента", required),
  },
};

export const v$ = useVuelidate(rules, state, { $autoDirty: true });
