import { helpers } from "@vuelidate/validators";
export const isValidDate = (date) => {
  const currentDate = new Date();
  const endYear = currentDate.getFullYear();
  const endMonth = currentDate.getMonth() + 1;
  const endDay = currentDate.getDate();
  const endDate = `${endYear}-${endMonth}-${endDay}`;
  return date.length === 10 && date > "1900-01-01" && date <= endDate;
};

export const isValidPhoneNumber = (number) =>
  !helpers.req(number) || number.indexOf(7) === 0;

export const isValidName = (name) => {
  if (name !== "") {
    const nameRegex = /[a-zA-Zа-яА-Я]+/;
    return nameRegex.test(name);
  }
};
