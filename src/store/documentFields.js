import { reactive } from "vue";

export const state = reactive({
  documentType: undefined,
  serialNumber: undefined,
  documentNumber: undefined,
  issuer: "",
  issueDate: "",
});
