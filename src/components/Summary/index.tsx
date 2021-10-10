import Tag from './styles';
import { getCoinFormattedBrazilianStandard } from './../../helpers/CoinHelper';

type Props = {
    title: string;
    value: number;
}
const Summary = ({ title, value }: Props) => 
<Tag.Container>
    <Tag.Title>{title}</Tag.Title>
    <Tag.Value>{getCoinFormattedBrazilianStandard(value)}</Tag.Value>
</Tag.Container>

export default Summary;