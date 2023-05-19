import { useState } from 'react';

import cl from './categories.module.scss';

const Categories = () => {
  const [categories] = useState([
    { title: 'Бизнес-книги', count: 14 },
    { title: 'Детективы', count: 8 },
    { title: 'Детские книги', count: 14 },
  ]);

  return (
    <ul className={cl.categories}>
      <li className={cl.categoryActive}>Все книги</li>
      {categories.map((item) => (
        <li className={cl.category} key={item.title}>
          {item.title}
          {item.count >= 0 && <span>{item.count}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
