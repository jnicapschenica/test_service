import { IUser } from "../types/types";

export const USERS: IUser[] = [
    {
        id: 1,
        name: 'Иван',
        surname: 'Иванов',
        stats: [{
            id: 1,
            testId: 2,
            start: new Date(),
            time: 546,
            correct: 5,
        }]
    },
    {
        id: 2,
        name: 'Петр',
        surname: 'Петров',
        stats: [{
            id: 1,
            testId: 2,
            start: new Date(),
            time: 3456,
            correct: 0,
        },
        {
            id: 2,
            testId: 2,
            start: new Date(),
            time: 346,
            correct: 3,
        },]
    },
    {
        id: 3,
        name: 'Кристина',
        surname: 'Нерушева',
        stats: [{
            id: 1,
            testId: 1,
            start: new Date(),
            time: 876,
            correct: 2,
        },
        {
            id: 2,
            testId: 2,
            start: new Date(),
            time: 7846,
            correct: 4,
        }]
    },
]