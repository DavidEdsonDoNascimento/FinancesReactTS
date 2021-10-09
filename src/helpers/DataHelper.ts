import AccountItem from './../@types/AccountItem';
 
const MONTHS = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Array<AccountItem>, date: string) : Array<AccountItem> => {
    
    let [year, month] = date.split('-');

    let filteredList = list.filter((item) => `${item.date.getMonth()+1}` === month && `${item.date.getFullYear()}` === year);
    return filteredList;
}

export const getDateFormattedBrazilianStandard = (date: Date): string => {
    return date.toLocaleString();
}

export const getCurrentMonthName = (date: string) : string => {
    const [year, currentMonth] = date.split('-');
    return `${MONTHS[+currentMonth - 1]} de ${year}`;
}