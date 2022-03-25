import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { state } from "../store/documentFields";
import { isValidDate } from "./validators";

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
