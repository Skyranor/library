import { ReactComponent as SortAscImg } from '../../assets/icons/action/Sort-ascending.svg';
import { ReactComponent as SortDescImg } from '../../assets/icons/action/Sort-descending.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSort } from '../../redux/books/booksSlice';
import { selectActiveFilter } from '../../redux/books/selectors';
import cl from './Sort.module.scss';

const Sort = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector(selectActiveFilter);
  const sortType = sort === 'asc' ? 'desc' : 'asc';

  const handleClickSort = () => {
    dispatch(setSort(sortType));
  };

  return (
    <button onClick={handleClickSort} className={cl.sortButton}>
      {sort === 'desc' ? <SortDescImg /> : <SortAscImg />}
      По рейтингу
    </button>
  );
};

export default Sort;
