import { ITest } from "../types/types";

export const TESTS: ITest[] = [
    {
        id: 1,
        name: 'Фрукты',
        enabled: true,
        questions: [{
            id: 1,
            question: 'Яблоко?',
            answers: [
                { answer: 'Да', isCorrect: true },
                { answer: 'Нет', isCorrect: false },
                { answer: 'Апельсин', isCorrect: false },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 2,
            question: 'Aпельсин?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: true },
                { answer: 'Яблоко', isCorrect: false },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 3,
            question: 'Арбуз?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: true },
                { answer: 'Картошка', isCorrect: false },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 4,
            question: 'Картошка?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: false },
                { answer: 'Картошка!!!', isCorrect: true },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 5,
            question: 'Обманка?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: false },
                { answer: 'Апельсин', isCorrect: false },
                { answer: 'Обманка', isCorrect: true },]
        },
        ]
    },
    {
        id: 2,
        name: 'Овощи',
        enabled: false,
        questions: [{
            id: 1,
            question: 'Яблоко?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: true },
                { answer: 'Апельсин', isCorrect: false },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 2,
            question: 'Aпельсин?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: true },
                { answer: 'Яблоко', isCorrect: false },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 3,
            question: 'Арбуз?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: true },
                { answer: 'Картошка', isCorrect: false },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 4,
            question: 'Картошка?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: false },
                { answer: 'Картошка!!!', isCorrect: true },
                { answer: 'Обманка', isCorrect: false },]
        },
        {
            id: 5,
            question: 'Обманка?',
            answers: [
                { answer: 'Да', isCorrect: false },
                { answer: 'Нет', isCorrect: false },
                { answer: 'Апельсин', isCorrect: false },
                { answer: 'Обманка', isCorrect: true },]
        },
        ]
    }
]