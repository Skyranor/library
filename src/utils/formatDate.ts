export function formatDate(jsonDate: string): string {
  const date = new Date(jsonDate);
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  /**
   * Добавляем ведущий ноль, если месяц или день состоят из одной цифры
   */
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }

  return ` ${day}.${month}`;
}
