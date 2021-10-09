import AccountItem from '../../@types/AccountItem';
import Tag from './styles';
import AccountTableItem from './AccountTableItem';

type Props = {
    accounts: AccountItem[]
}

const AccountTable = ({accounts}: Props) => 
<Tag.Table>
    <thead>
        <tr>
            <Tag.THeadColumn width={80}>Cód:</Tag.THeadColumn>
            <Tag.THeadColumn>Título:</Tag.THeadColumn>
            <Tag.THeadColumn width={100}>Data:</Tag.THeadColumn>
            <Tag.THeadColumn width={130}>Categoria:</Tag.THeadColumn>
            <Tag.THeadColumn width={150}>Valor:</Tag.THeadColumn>
        </tr>
    </thead>
    <tbody>
        {accounts.map(item => <AccountTableItem account={item} /> )}
    </tbody>
</Tag.Table>

export default AccountTable;