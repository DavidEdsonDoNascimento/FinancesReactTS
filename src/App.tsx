import { useState, useEffect } from 'react';
import Tag from './App.styles';
import Items from './data/items';
import AccountItem from './@types/AccountItem';
import Categories from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/DataHelper';
import AccountTable from './components/AccountTable';
import Overview from './components/Overview';

const App = () => {

  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<AccountItem[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
   <Tag.Container>
     <Tag.Header>
       <Tag.HeaderTitle>Sistema Financeiro</Tag.HeaderTitle>
     </Tag.Header>
     <Tag.Body>
       <Overview currentMonth={currentMonth} />
       <AccountTable accounts={filteredList} />
     </Tag.Body>
   </Tag.Container>
  );
}

export default App;
