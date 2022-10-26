import React, { FC } from 'react'
import TestServiceButton from './UI/button/TestServiceButton';
import TestServiceInput from './UI/input/TestServiceInput'

interface QuestionProps {
    id: number;
    value?: string;
    type?: string;
    placeholder?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: FC<QuestionProps> = ({
    id,
    value,
    type,
    placeholder,
    onChange,
    checked,
    ...props
}) => {

    const changeCheckbox = () => {

    }

    const changeVariant = () => {

    }

    return (
        <div style={{ width: '1200px' }}>
            <div className='item'>
                <div style={{ border: '1px solid blue', width: '30px', height: '30px', borderRadius: '15px', marginRight: '10px', padding: '2px 5px' }}>{id}.</div>
                <TestServiceInput placeholder='Введите вопрос' />
                <TestServiceButton style={{ marginLeft: '10px' }}>⨉</TestServiceButton>
            </div>
            <div className='item'>
                <div className='list'>
                    {[1, 2].map(() =>
                        <div className='item'>
                            <TestServiceInput type='text' onChange={changeVariant} placeholder='Введите вариант ответа' />
                            <TestServiceInput type='checkbox' checked={checked} onChange={changeCheckbox} />
                        </div>
                    )}
                </div >
                <div className='list'>
                    {[3, 4].map(() =>
                        <div className='item'>
                            <TestServiceInput type='text' onChange={changeVariant} placeholder='Введите вариант ответа' />
                            <TestServiceInput type='checkbox' checked={checked} onChange={changeCheckbox} />
                        </div>
                    )}
                </div >
            </div>
        </div >
    )
}

export default Question
