import { useState } from 'react';

import { ReactComponent as ClearIcon } from '../../assets/icons/action/Close.svg';
import { ReactComponent as RowLayout } from '../../assets/icons/action/Menu.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/action/Search.svg';
import { ReactComponent as SortAscImg } from '../../assets/icons/action/Sort-ascending.svg';
import { ReactComponent as SortDescImg } from '../../assets/icons/action/Sort-descending.svg';
import { ReactComponent as ColumnLayout } from '../../assets/icons/action/Square-four.svg';
import BookList from '../../components/Books/BookList';
import { IconButton } from '../../components/UI/buttons';
import MenuLayout from '../../layouts/Menu';
import { useGetBooksQuery } from '../../redux/api/apiSlice';
import cl from './MainPage.module.scss';

const MainPage = () => {
  const { data: books } = useGetBooksQuery();
  const [layout, setLayout] = useState<'column' | 'row'>('column');

  return (
    <MenuLayout>
      <div className={cl.navigationList}>
        <div className={cl.search}>
          <SearchIcon className={cl.searchIcon} />
          <input placeholder='Поиск книги или автора…' />
          <ClearIcon className={cl.clearIcon} />
        </div>
        <button className={cl.sortButton}>
          <SortDescImg />
          {/* <SortAscImg /> */}
          По рейтингу
        </button>
        <div className={cl.cardsLayout}>
          <IconButton
            onClick={() => setLayout('column')}
            isActive={layout === 'column' ? true : false}
            icon={<ColumnLayout />}
          />
          <IconButton
            onClick={() => setLayout('row')}
            isActive={layout === 'row' ? true : false}
            icon={<RowLayout />}
          />
        </div>
      </div>
      {books && <BookList display={layout} books={books} />}
    </MenuLayout>
  );
};

export default MainPage;
