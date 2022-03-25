import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { state } from "../store/adressFields";
import { isValidName } from "./validators";

const rules = {
  city: {
    required: helpers.withMessage("Укажите город", required),
    isValidName: helpers.withMessage(
      "В названии города должны быть только буквы",
      isValidName
    ),
  },
};

export const v$ = useVuelidate(rules, state, { $autoDirty: true });
