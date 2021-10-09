import Tag from './styles';
import { getCurrentMonthName } from './../../helpers/DataHelper';

type Props = {
    currentMonth: string;
    changeMonth: (newMonth: string) => void;
}

const Overview = ({ currentMonth, changeMonth }: Props) => {

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

            </Tag.AccountingSection>
        </Tag.Container>
    );
}

export default Overview;