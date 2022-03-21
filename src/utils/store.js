import { reactive } from 'vue'

export const state = reactive({
  firstName: '',
  lastName: '',
  patronym: '',
  birthDate: '',
  phoneNumber: '7',
  gender: undefined,
  clientGroup: [],
  doctor: undefined,
  noSms: false,
  zipCode: '',
  country: '',
  region: '',
  city: '',
  street: '',
  house: undefined,
  documentType: undefined,
  serialNumber: undefined,
  documentNumber: undefined,
  issuer: '',
  issueDate: '',
})
