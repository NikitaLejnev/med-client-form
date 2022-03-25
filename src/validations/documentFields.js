import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
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

const rules = {
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
