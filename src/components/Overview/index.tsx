import Tag from './styles';
import { getCurrentMonthName } from './../../helpers/DataHelper';

type Props = {
    currentMonth: string;
    changeMonth: (newMonth: string) => void;
}

const Overview = ({ currentMonth, changeMonth }: Props) => {

    const goToPreviousMonth = () => {
        const [year, month] = currentMonth.split('-');
        changeMonth(`${year}-${+month - 1}`);
    }

    const goToNextMonth = () => {
        const [year, month] = currentMonth.split('-');
        changeMonth(`${year}-${+month + 1}`);
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