import dayjs, { Dayjs } from 'dayjs';

export const disabledDate = (current: Dayjs): boolean => {
  const today: Dayjs = dayjs();
  const todayDay: number = today.day();

  if (
    !current.isSame(today, 'day') &&
    !current.isSame(today.add(1, 'day'), 'day')
  ) {
    return true;
  }

  if (todayDay === 5) {
    return (
      !current.isSame(today, 'day') &&
      !current.isSame(today.add(3, 'day'), 'day')
    );
  }

  if (todayDay === 6) {
    return !current.isSame(today.add(2, 'day'), 'day');
  }

  if (todayDay === 0) {
    return !current.isSame(today.add(1, 'day'), 'day');
  }

  return false;
};
