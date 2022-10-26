export interface IAnswer {
    answer: string;
    isChosen?: boolean;
    isCorrect: boolean;
}

export interface IQuestion {
    id: number;
    question: string;
    answers: IAnswer[];
}

export interface ITest {
    id: number;
    name: string;
    enabled: boolean;
    questions: IQuestion[];
}

export interface IResult {
    id: number;
    testId: number;
    start: Date;
    time: number;
    correct: number;
}

export interface IUser {
    id: number;
    name: string;
    surname: string;
    stats: IResult[];
}

export interface IAuth {
    login: string;
    password: string;
}