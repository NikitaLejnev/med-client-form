import useVuelidate from "@vuelidate/core";
import {
  required,
  helpers,
  minLength,
  maxLength,
  alpha,
} from "@vuelidate/validators";
import { state } from "../utils/store";

const isValidDate = (date) => {
  if (date && date !== "") {
    const currentDate = new Date();
    const endYear = currentDate.getFullYear();
    const endMonth = currentDate.getMonth() + 1;
    const endDay = currentDate.getDate();
    const endDate = `${endYear}-${endMonth}-${endDay}`;
    return date.length === 10 && date > "1900-01-01" && date <= endDate;
  }
};

const isValidPhoneNumber = (number) =>
  !helpers.req(number) || number.indexOf(7) === 0;

const rules = {
  firstName: {
    required: helpers.withMessage("Укажите имя", required),
    alpha: helpers.withMessage("В имени должны быть только буквы", alpha),
  },
  lastName: {
    required: helpers.withMessage("Укажите фамилию", required),
    alpha: helpers.withMessage("В фамилии должны быть только буквы", alpha),
  },
  birthDate: {
    required: helpers.withMessage("Укажите дату рождения", required),
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
  },
  clientGroup: {
    required: helpers.withMessage("Укажите группу клиента", required),
  },
  city: {
    required: helpers.withMessage("Укажите город", required),
    alpha: helpers.withMessage(
      "В названии города должны быть только буквы",
      alpha
    ),
  },
  documentType: {
    required: helpers.withMessage("Укажите тип документа", required),
  },
  issueDate: {
    required: helpers.withMessage("Укажите дату выдачи документа", required),
    isValidDate: helpers.withMessage(
      "Укажите корректную дату выдачи документа",
      isValidDate
    ),
  },
};

export const v$ = useVuelidate(rules, state, { $autoDirty: true });
