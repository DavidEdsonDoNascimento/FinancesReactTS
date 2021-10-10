import Tag from './styles';
import Categories from './../../data/categories';
import { useState } from 'react';
import AccountItem from './../../@types/AccountItem';

type Props = {
    listLength: number;
    addAccountInTable: (account: AccountItem) => void;
}

const Form = ({ listLength, addAccountInTable }: Props) => {

    const [dateTimeField, setDateTimeField] = useState('');
    const [selectCategoryField, setSelectCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    const addAccount = () => {
        if(!titleField || valueField <= 0 || !selectCategoryField || !dateTimeField){
            console.error('erro, preencha os dados corretamente no formulário.');
            return;
        }

        addAccountInTable({
            id: listLength + 1,
            title: titleField,
            category: selectCategoryField,
            value: valueField,
            date: new Date(dateTimeField)
        });
        
        clearFields();
    }

    const clearFields = () => {
        setDateTimeField('');
        setSelectCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <Tag.Container>
            <Tag.Field>
                <Tag.TitleField>Data:</Tag.TitleField>
                <Tag.InputField type="datetime-local" value={dateTimeField} onChange={e => setDateTimeField(e.target.value)}/>
            </Tag.Field>
            <Tag.Field>
            <Tag.TitleField>Categoria:</Tag.TitleField>
                <Tag.SelectField value={selectCategoryField} onChange={e => setSelectCategoryField(e.target.value)} >
                    <option value="">Selecione ...</option>
                    {Object.keys(Categories).map((key, index) => <option value={key}>{Categories[key].title}</option>)}
                </Tag.SelectField>
            </Tag.Field>
            <Tag.Field>
                <Tag.TitleField>Título:</Tag.TitleField>
                <Tag.InputField type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
            </Tag.Field>
            <Tag.Field>
                <Tag.TitleField>Valor:</Tag.TitleField>
                <Tag.InputField type="number" value={valueField} onChange={e => setValueField(+e.target.value)} />
            </Tag.Field>
            <Tag.Field>
                <Tag.TitleField>&nbsp;</Tag.TitleField>
                <Tag.AddButton onClick={addAccount}>Adicionar</Tag.AddButton>
            </Tag.Field>
        </Tag.Container>
    );
}

export default Form;