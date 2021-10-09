import AccountItem from './../@types/AccountItem';

export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Array<AccountItem>, date: string) : Array<AccountItem> => {
    
    let [year, month] = date.split('-');

    let filteredList = list.filter((item) => `${item.date.getMonth()+1}` === month && `${item.date.getFullYear()}` === year);
    return filteredList;
}

export const getDateFormattedBrazilianStandard = (date: Date) => {
    return date.toLocaleString();
}