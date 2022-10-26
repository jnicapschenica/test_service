import React, { FC } from 'react'
import { IUser } from '../types/types'
import { averageScore, getDate, getTestName, getTime, idAttempts, successfulAttempts, successfulPercentage, totalAttempts } from '../utils/index'

interface StatsProps {
    user: IUser;
    testId: string;
}

const Stats: FC<StatsProps> = ({ user, testId }) => {

    return (
        <div className='stats' style={{ width: '700px' }}>
            <h1>Тест {getTestName(testId)}</h1>
            <h1>Общее количество попыток: {totalAttempts(user, testId)}</h1>
            <h1>Успешно пройдено: {successfulAttempts(user, testId)} {`(`} {successfulPercentage(user, testId)} {`%)`} </h1>
            <h1>Средний балл: {averageScore(user, testId)}</h1>
            <div>
                {idAttempts(user, testId).map(attempt =>
                    <div className='stats' key={attempt.id}>
                        <h3>Дата и время начала прохождения теста: {getDate(attempt)}</h3>
                        <h3>Время, затраченное на прохождение теста: {getTime(attempt)}</h3>
                        <h3>Количество правильных ответов: {attempt.correct}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Stats
