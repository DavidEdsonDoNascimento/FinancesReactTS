import styled from 'styled-components';

const Tag = {
    Table: styled.table`
        width: 100%;
        background-color: #fff;
        padding: 10px;
        box-shadow: 0px 0px 5px #CECECE;
        border-radius: 5px;
        margin-top: 10px;
    `,
    THeadColumn: styled.th<{width?: number}>`
        width: ${props => props?.width ? `${props.width}px` : 'auto'};
        padding: 10px 0;
        text-align: left;
    `
};

export default Tag;