import React, { FC } from 'react'
import { ITest } from '../types/types'

interface TestProps {
    test: ITest,
}

const Test: FC<TestProps> = ({ test }) => {
    return (
        <div className='text'>
            {test.name}
        </div>
    )
}

export default Test
