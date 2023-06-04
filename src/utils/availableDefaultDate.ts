import dayjs from 'dayjs';

export const availableDefaultDate = (): string => {
  const today = dayjs();
  let defaultDate = today;

  while (defaultDate.day() === 0 || defaultDate.day() === 6) {
    defaultDate = defaultDate.add(1, 'day');
  }

  return defaultDate.format('YYYY-MM-DD');
};
