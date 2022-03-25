import { reactive } from "vue";

export const state = reactive({
  firstName: "",
  lastName: "",
  patronym: "",
  birthDate: "",
  phoneNumber: "7",
  gender: undefined,
  clientGroup: [],
  doctor: undefined,
  noSms: false,
});
