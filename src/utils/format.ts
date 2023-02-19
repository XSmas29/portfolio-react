type DateFormatter = {
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
  day: 'numeric' | '2-digit',
  hour?: 'numeric' | '2-digit',
  minute?: 'numeric' | '2-digit',
  second?: 'numeric' | '2-digit',
  weekday?: 'long' | 'short' | 'narrow',
};

const filterDate = (date: string, locales = 'en-US', format: DateFormatter = { day: 'numeric', month: 'short', year: 'numeric' }) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString(locales, format);
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export {
  filterDate,
  months,
};