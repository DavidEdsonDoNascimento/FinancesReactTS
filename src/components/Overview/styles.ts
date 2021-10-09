import styled from 'styled-components';

const Tag = {
    Container: styled.div`
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 5px #CCC;
        border-radius: 10px;
        margin-top: -40px;
        display: flex;
        align-items: center;
    `,
    CalendarSection: styled.div`
        flex: 1;
        display:flex;
        align-items: center;
    `,
    AccountingSection: styled.div`
        flex: 2;
        display:flex;
    `,
    NavigationArrow: styled.div`
        width: 40px;
        text-align: center;
        font-size: 25px;
        cursor: pointer;
    `,
    MonthTitle: styled.div`
        flex: 1;
        text-align: center;
    `,
}

export default Tag;