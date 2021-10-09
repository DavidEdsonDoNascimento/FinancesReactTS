export const getCoinFormattedBrazilianStandard = (coin: number) => {
    return `R$ ${coin.toFixed(2).toString().replace('.', ',')}`;
}