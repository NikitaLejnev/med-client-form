export const personalFields = [
  { label: "Имя", property: "firstName", id: "first-name", required: true },
  { label: "Фамилия", property: "lastName", id: "last-name", required: true },
  { label: "Отчество", property: "patronym", id: "patronym", required: false },
];

export const adressFields = [
  { label: "Индекс", property: "zipCode", id: "zip-code", required: false },
  { label: "Страна", property: "country", id: "country", required: false },
  { label: "Область", property: "region", id: "region", required: false },
  { label: "Город", property: "city", id: "city", required: true },
  { label: "Улица", property: "street", id: "street", required: false },
  { label: "Дом", property: "house", id: "house", required: false },
];

export const documentFields = [
  {
    label: "Серия",
    property: "serialNumber",
    id: "serial-number",
    required: false,
  },
  {
    label: "Номер",
    property: "documentNumber",
    id: "document-number",
    required: false,
  },
  { label: "Кем выдан", property: "issuer", id: "issuer", required: false },
];
