import dayjs from 'dayjs';

export const availableDefaultDate = (): string => {
  const today = dayjs();
  let defaultDate = today;
  const saturday = 6;
  const sunday = 0;

  if (defaultDate.day() === saturday) {
    defaultDate = defaultDate.add(2, 'day');
  }

  if (defaultDate.day() === sunday) {
    defaultDate = defaultDate.add(1, 'day');
  }

  return defaultDate.format('YYYY-MM-DD');
};
