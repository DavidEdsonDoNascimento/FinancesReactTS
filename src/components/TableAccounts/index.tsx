import AccountItem from '../../@types/AccountItem';
import Tag from './styles';

type Props = {
    accounts: AccountItem[]
}

const TableAccounts = ({accounts}: Props) => 
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
        {accounts.map(item => 
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.date.toLocaleString()}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
        </tr>
        )}
    </tbody>
</Tag.Table>

export default TableAccounts;