import React, { FC, useState } from 'react';
import List from '../components/List';
import { ITest } from '../types/types';
import Test from '../components/Test';
import { TESTS } from '../data/TestList';
import TestServiceButton from '../components/UI/button/TestServiceButton';
import { useNavigate } from 'react-router-dom';
import TestServiceInput from '../components/UI/input/TestServiceInput';

const Tests: FC = () => {
    const router = useNavigate()
    const [tests, setTests] = useState(TESTS)

    const remove = (test: ITest) => {
        setTests(tests.filter(t => t.id !== test.id))
    }

    return (
        <div className='test__list'>
            <div className='list'>
                <List
                    items={TESTS}
                    renderItem={(
                        test: ITest
                    ) =>
                        <div className='item'>
                            <Test
                                test={test}
                                key={test.id}
                            />
                            <TestServiceInput type="checkbox" style={{width:'20px'}}/>
                            <TestServiceButton>
                                ⨉
                            </TestServiceButton>
                        </div>
                    }
                />
            </div>
            <TestServiceButton onClick={() => router('/tests/create')}>
                Создать тест
            </TestServiceButton>
        </div>
    )
}

export default Tests
