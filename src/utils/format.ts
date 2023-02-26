// type DateFormatter = {
//   year: 'numeric' | '2-digit',
//   month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow',
//   day: 'numeric' | '2-digit',
//   hour?: 'numeric' | '2-digit',
//   minute?: 'numeric' | '2-digit',
//   second?: 'numeric' | '2-digit',
//   weekday?: 'long' | 'short' | 'narrow',
// };

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

const dateTimeLine = (
  year: number, 
  month?: number, 
  day?: number, 
) => {
  return `${month ? months[month - 1] : ''} ${day ? day : ''}${day ? ', ' : ''}${year}`;

};

export {
  dateTimeLine,
  months,
};