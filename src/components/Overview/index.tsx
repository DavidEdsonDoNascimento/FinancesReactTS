import Tag from './styles';
import { getCurrentMonthName } from './../../helpers/DataHelper';

type Props = {
    currentMonth: string;
}

const Overview = ({ currentMonth }: Props) =>
<Tag.Container>
    <Tag.CalendarSection>
        <Tag.NavigationArrow>←</Tag.NavigationArrow>
        <Tag.MonthTitle>{getCurrentMonthName(currentMonth)}</Tag.MonthTitle>
        <Tag.NavigationArrow>→</Tag.NavigationArrow>
    </Tag.CalendarSection>
    <Tag.AccountingSection>

    </Tag.AccountingSection>
</Tag.Container>

export default Overview;