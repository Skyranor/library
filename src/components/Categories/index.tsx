import { useGetCategoriesQuery } from '../../redux/api/apiSlice';
import cl from './Categories.module.scss';

const Categories = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <ul className={cl.categories}>
      <li className={cl.categoryActive}>Все книги</li>
      {categories &&
        categories.map((category) => (
          <li className={cl.category} key={category.id}>
            {category.name}
            <span>{category.booksCount}</span>
          </li>
        ))}
    </ul>
  );
};

export default Categories;
