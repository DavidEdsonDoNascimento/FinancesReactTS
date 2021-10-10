import { useState, useEffect } from 'react';
import Tag from './App.styles';
import Items from './data/items';
import AccountItem from './@types/AccountItem';
import Categories from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/DataHelper';
import AccountTable from './components/AccountTable';
import Overview from './components/Overview';
import Form from './components/Form';

const App = () => {

  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<AccountItem[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const changeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const addAccountInTable = (account: AccountItem) => {
    setList([ ...list, account ]);
  }

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    const incomeOfMonth = filteredList.filter(item => Categories[item?.category]?.expense? null : item)
    .reduce((contador, item) => contador + item.value, 0);
    
    const expenseOfMonth = filteredList.filter(item => Categories[item?.category]?.expense? item : null)
    .reduce((contador, item) => contador + item.value, 0);

    setIncome(incomeOfMonth);
    setExpense(expenseOfMonth);
    
  }, [filteredList]);

  return (
   <Tag.Container>
     <Tag.Header>
       <Tag.HeaderTitle>Sistema Financeiro</Tag.HeaderTitle>
     </Tag.Header>
     <Tag.Body>
       <Overview currentMonth={currentMonth} changeMonth={changeMonth} income={income} expense={expense} />
       <Form addAccountInTable={addAccountInTable} listLength={list.length} />
       <AccountTable accounts={filteredList} />
     </Tag.Body>
   </Tag.Container>
  );
}

export default App;
