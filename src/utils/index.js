export const parseDate = (date) => {
  // Якщо date — це Timestamp від Firebase, перетворюємо в Date
  if (date && date.toDate) {
    date = date.toDate();
  }

  // Якщо це вже об'єкт Date, повертаємо його
  if (date instanceof Date) {
    return date;
  }

  // Якщо передано некоректне значення, повертаємо null
  return null;
};
