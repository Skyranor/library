import dayjs, { Dayjs } from 'dayjs';

export const disabledDate = (current: Dayjs): boolean => {
  const today: Dayjs = dayjs();
  const todayDay: number = today.day();
  const friday = 5;
  const saturday = 6;
  const sunday = 0;

  if (
    !current.isSame(today, 'day') &&
    !current.isSame(today.add(1, 'day'), 'day')
  ) {
    return true;
  }

  if (todayDay === friday) {
    return (
      !current.isSame(today, 'day') &&
      !current.isSame(today.add(3, 'day'), 'day')
    );
  }

  if (todayDay === saturday) {
    return !current.isSame(today.add(2, 'day'), 'day');
  }

  if (todayDay === sunday) {
    return !current.isSame(today.add(1, 'day'), 'day');
  }

  return false;
};
