import React, { FC, useState } from 'react'
import Question from '../components/Question'
import TestServiceButton from '../components/UI/button/TestServiceButton'
import TestServiceInput from '../components/UI/input/TestServiceInput'
import { ITest } from '../types/types'

const NewTestPage: FC = () => {
    const [test, setTest] = useState<ITest>({ id: 0, name: '', enabled: false, questions: [] })
    const [count, setCount] = useState<number>(5)
    const [isShowing, setIsShowing] = useState<boolean>(true)

    const createList = () => {
        const id: number[] = []
        for (let i = 0; i < count; i++)
            id.push(i + 1)
        return id
    }

    const save = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTest({ id: test.id, name: event.target.value, enabled: test.enabled, questions: test.questions })
    }

    const addQuestion = () => {
        if (count < 15) {
            setCount(count + 1)
            if (count === 14)
                setIsShowing(false)
        }
    }

    return (
        <form onSubmit={save} className='form' style={{ background: 'transparent' }}>
            <TestServiceInput value={test.name} onChange={changeName} placeholder='Введите название' />
            {createList().map(q => <Question id={q} />)}
            <TestServiceButton onClick={addQuestion} style={{ display: (isShowing ? 'block' : 'none'), marginTop: '15px' }}>+</TestServiceButton>
            <TestServiceButton style={{ margin: '15px 0 15px' }}>Сохранить</TestServiceButton>
        </form>
    )
}

export default NewTestPage

