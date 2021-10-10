import Tag from './styles';
import { getCoinFormattedBrazilianStandard } from './../../helpers/CoinHelper';

type Props = {
    title: string;
    value: number;
    color?: string;
}
const Summary = ({ title, value, color }: Props) => 
<Tag.Container>
    <Tag.Title>{title}</Tag.Title>
    <Tag.Value color={color}>{getCoinFormattedBrazilianStandard(value)}</Tag.Value>
</Tag.Container>

export default Summary;