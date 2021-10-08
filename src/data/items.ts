import AccountItem from "../@types/AccountItem";

const items: AccountItem[] = [
    {
        id: 1,
        date: new Date(2021, 9, 15, 20, 21, 35),
        category: 'food',
        value: 34.98,
        title: 'Burguer King'
    },
    {
        id: 2,
        date: new Date(2021, 11, 24, 13, 47, 16),
        category: 'food',
        value: 38.30,
        title: 'Supermercados Bistek'
    },
    {
        id: 3,
        date: new Date(2021, 10, 2, 21),
        category: 'food',
        value: 82.99,
        title: 'Camarão Express'
    },
    {
        id: 4,
        date: new Date(2021, 9, 22),
        category: 'rent',
        value: 900,
        title: 'Aluguel'
    },
    {
        id: 5,
        date: new Date(2021, 9, 15),
        category: 'salary',
        value: 2880,
        title: 'Salário'
    }
];

export default items;