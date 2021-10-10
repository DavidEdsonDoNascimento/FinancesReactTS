import styled from 'styled-components';

const Tag = {
    Th: styled.tr``,
    Td: styled.td`
        padding: 10px 0;
    `,
    DivCategory: styled.div<{ color:string }>`
        display: inline-block;
        padding: 5px 10px;
        color: #fff;
        border-radius: 5px;
        background-color: ${props => props.color}
    `,
    DivValue: styled.div<{ color: string}>`
        color: ${props => props.color}
    `
}

export default Tag;