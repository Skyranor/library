import { useState } from 'react';

import { Book } from '../../../models/Book';
import CardBook from '../CardBook';
import cl from './BookList.module.scss';

const BookList = () => {
  const [books] = useState<Book[]>([
    {
      id: 3,
      category: 'Роман',
      categoryId: 3,
      title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
      author: 'Адитья Бхаргава',
      rating: '4.3',
      year: 2019,
      isBooked: false,
      bookedTill: '',
      img: 'https://books.com/sherlockholmes.jpg',
    },
    {
      id: 2,
      category: 'Детектив',
      categoryId: 2,
      title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
      author: 'Адитья Бхаргава',
      rating: '',
      year: 2019,
      isBooked: false,
      bookedTill: '',
      img: '',
    },
  ]);

  return (
    <section className={cl.bookGrid}>
      <ul className={cl.booksList}>
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
