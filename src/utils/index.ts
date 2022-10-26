import { IResult, IUser } from "../types/types"
import { TESTS } from "../data/TestList";

export const idAttempts = (user:IUser, testId:string) => {
    return ([...user.stats].filter(u => u.testId.toString() === testId))
}

export const getTestName = (testId:string) => {
    return (TESTS.find(test => test.id.toString() === testId)?.name)
}

export const totalAttempts = (user:IUser, testId:string) => {
    return idAttempts(user, testId).length
}

export const successfulAttempts = (user:IUser, testId:string) => {
    const found: number | undefined = TESTS.find(test => test.id.toString() === testId)?.questions.length
    return [...idAttempts(user, testId)].filter(a => a.correct === found).length
}

export const successfulPercentage = (user:IUser, testId:string) => {
    const successful: number | undefined = successfulAttempts(user, testId)
    const total: number | undefined = totalAttempts(user, testId)
    if (total !== 0)
        return successful / total * 100
    else
        return 0
}

export const averageScore = (user:IUser, testId:string) => {
    let sum: number = 0
    const total: number | undefined = totalAttempts(user, testId)

    for (let i = 0; i < totalAttempts(user, testId); i++) {
        sum += idAttempts(user, testId)[i].correct
    }
    if (total !== 0)
        return sum / total
    else
        return 0
}

export const getDate = (attempt: IResult) => {
    return new Date(attempt.start).toLocaleString()
}

export const getTime = (attempt: IResult) => {
    return new Date(attempt.time).toLocaleTimeString()
}