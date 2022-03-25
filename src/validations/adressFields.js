import useVuelidate from "@vuelidate/core";
import { required, helpers, alpha } from "@vuelidate/validators";
import { state } from "../utils/store";

const rules = {
  city: {
    required: helpers.withMessage("Укажите город", required),
    alpha: helpers.withMessage(
      "В названии города должны быть только буквы",
      alpha
    ),
  },
};

export const v$ = useVuelidate(rules, state, { $autoDirty: true });
