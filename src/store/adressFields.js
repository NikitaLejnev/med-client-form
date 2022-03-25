import { reactive } from "vue";

export const state = reactive({
  zipCode: "",
  country: "",
  region: "",
  city: "",
  street: "",
  house: undefined,
});
