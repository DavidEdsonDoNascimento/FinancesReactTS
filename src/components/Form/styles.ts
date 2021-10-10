import styled from 'styled-components';

const Tag = {
    Container: styled.div`
        display: flex;
        align-items: center;
        background-color: #FFF;
        box-shadow: 0px 0px 5px #CCC;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    `,
    Field: styled.label`
        flex: 1;
        margin: 10px;
    `,
    TitleField: styled.div`
        font-weight: bold;
        margin-botton: 5px;
    `,
    InputField: styled.input`
        width: 100%;
        height: 30px;
        padding: 0 5px;
        border: 1px solid lightblue;
        border-radius: 5px;
    `,
    SelectField: styled.select`
        width: 100%;
        height: 30px;    
        padding: 0 5px;
        border: 1px solid lightblue;
        border-radius: 5px;
    `,
    AddButton: styled.button`
        width: 100%;
        height: 30px;
        padding: 0 5px;
        border: 1px solid lightblue;
        border-radius: 5px;
        background-color: lightblue;
        color: black;
        cursor: pointer;
        &:hover {
            background-color: blue;
            color: white;
        }
    `
}

export default Tag;