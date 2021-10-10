import AccountItem from "../../@types/AccountItem"
import Tag from './styles';
import { getDateFormattedBrazilianStandard } from '../../helpers/DataHelper';
import { getCoinFormattedBrazilianStandard } from '../../helpers/CoinHelper';
import Categories from '../../data/categories';

type Props = {
    account: AccountItem
}

const AccountTableItem = ({ account }: Props) => 
<Tag.Th key={account.id}>
    <Tag.Td>{account.id}</Tag.Td>
    <Tag.Td>{account.title}</Tag.Td>
    <Tag.Td>{getDateFormattedBrazilianStandard(account.date)}</Tag.Td>
    <Tag.Td>
        <Tag.DivCategory color={Categories[account.category].color}>
            {Categories[account.category].title}
        </Tag.DivCategory>
    </Tag.Td>
    <Tag.Td>
        <Tag.DivValue color={Categories[account.category]?.expense? '#b6174b' : '#698f3f'}>
            {getCoinFormattedBrazilianStandard(account.value)}
        </Tag.DivValue>
    </Tag.Td>
</Tag.Th>

export default AccountTableItem;