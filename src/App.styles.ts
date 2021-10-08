import styled from 'styled-components';

const Tag = {
    Container: styled.div``,
    Header: styled.div`
        background-color: darkblue;
        height: 150px;
        text-align: center;
    `,
    HeaderTitle: styled.h1`
        color: white;
        margin: 0;
        padding: 0;
        padding-top: 30px;
    `,
    Body: styled.div`
        margin: auto;
        max-width: 980px;
        margin-bottom: 50px;
    `,
};

export default Tag;