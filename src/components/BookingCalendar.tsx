import { Calendar, ConfigProvider, theme } from 'antd';
import locale from 'antd/locale/ru_RU';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { useState } from 'react';
import { toast } from 'react-toastify';

import {
  useGetUserDataQuery,
  useReserveBookMutation,
} from '../redux/api/apiSlice';
import { availableDefaultDate } from '../utils/availableDefaultDate';
import { disabledDate } from '../utils/disabledDate';
import Loader from './UI/Loader';
import Modal from './UI/Modal';

interface CalendarModalProps {
  onClose: () => void;
  id: number;
}

const CalendarModal = ({ onClose, id }: CalendarModalProps) => {
  const [selectedDate, setSelectedDate] =
    useState<string>(availableDefaultDate);

  const [reserveBook, { isLoading: isLoadingReserveBook }] =
    useReserveBookMutation();

  const { data: user } = useGetUserDataQuery();

  const handleChangeDate = (value: Dayjs) => {
    setSelectedDate(value.format('YYYY-MM-DD'));
  };

  const handleReserveBook = async () => {
    if (selectedDate && user) {
      try {
        await reserveBook({
          data: {
            order: true,
            book: String(id),
            customer: String(user.id),
            dateOrder: selectedDate,
          },
        }).unwrap();
        toast.success(
          'Книга забронирована. Подробности можно посмотреть на странице Профиль',
          {}
        );
        onClose();
      } catch (error) {
        console.error(error);
        toast.error(
          'Что-то пошло не так, книга не забронирована. Попробуйте позже!'
        );
      }
    }
  };

  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    marginBottom: 20,
  };

  return (
    <ConfigProvider locale={locale}>
      {isLoadingReserveBook && <Loader />}
      <Modal
        onClick={handleReserveBook}
        title='Выбор даты бронирования'
        buttonText='Забронировать'
        onClose={onClose}
      >
        <Calendar
          defaultValue={dayjs(selectedDate)}
          style={wrapperStyle}
          fullscreen={false}
          disabledDate={disabledDate}
          onChange={handleChangeDate}
        />
      </Modal>
    </ConfigProvider>
  );
};

export default CalendarModal;
