import Tag from './styles';
import { getCurrentMonthName } from './../../helpers/DataHelper';
import Summary from './../Summary';


type Props = {
    currentMonth: string;
    changeMonth: (newMonth: string) => void;
    income: number;
    expense: number;
}

const Overview = ({ currentMonth, changeMonth, income, expense }: Props) => {

    const goToPreviousMonth = () => {
        const [year, month] = currentMonth.split('-');
        const newDate = new Date(+year, +month - 1, 1);
        newDate.setMonth(newDate.getMonth() - 1);
        changeMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
    }

    const goToNextMonth = () => {
        const [year, month] = currentMonth.split('-');
        const newDate = new Date(+year, +month - 1, 1);
        newDate.setMonth(newDate.getMonth() + 1);
        changeMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
    }

    return (
        <Tag.Container>
            <Tag.CalendarSection>
                <Tag.NavigationArrow onClick={goToPreviousMonth}>←</Tag.NavigationArrow>
                <Tag.MonthTitle>{getCurrentMonthName(currentMonth)}</Tag.MonthTitle>
                <Tag.NavigationArrow onClick={goToNextMonth}>→</Tag.NavigationArrow>
            </Tag.CalendarSection>
            <Tag.AccountingSection>
                <Summary title="Receitas" value={income} />
                <Summary title="Despesas" value={expense} />
                <Summary title="Balanço" value={income - expense} color={(income - expense) < 0 ? '#b6174b' : '#698f3f'} />
            </Tag.AccountingSection>
        </Tag.Container>
    );
}

export default Overview;