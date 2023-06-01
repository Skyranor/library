import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetCategoriesQuery } from '../../redux/api/apiSlice';
import { setCategory } from '../../redux/books/booksSlice';
import { selectActiveFilter } from '../../redux/books/selectors';
import cl from './Categories.module.scss';

const Categories = () => {
  const { data: categories } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(selectActiveFilter);

  const handleClickCategory = (category: string) => {
    dispatch(setCategory(category));
  };

  return (
    <ul className={cl.categories}>
      {categories &&
        categories.map((item) => (
          <li
            onClick={() => handleClickCategory(item.name)}
            className={clsx(
              cl.category,
              item.name === category && cl.categoryActive
            )}
            key={item.id}
          >
            <Link to={`/books/${item.path}`}>
              {item.name}
              {item.path !== 'all' && (
                <span className={cl.categoryCount}>{item.booksCount}</span>
              )}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Categories;
