import React, { FC, useContext, useState } from 'react';
import TestServiceButton from '../components/UI/button/TestServiceButton';
import TestServiceInput from '../components/UI/input/TestServiceInput';
import { AuthContext } from '../context';
import { IAuth } from '../types/types';
import { LOGIN, PASSWORD } from '../data/LoginData';

const Login: FC = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [log, setLog] = useState<IAuth>({ login: '', password: '' })
    const [isShowing, setIsShowing] = useState<boolean>(false)

    const changeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLog({ login: event.target.value, password: log.password })
    }

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLog({ login: log.login, password: event.target.value })
    }

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (log.login === LOGIN && log.password === PASSWORD) {
            setIsAuth(true)
            localStorage.setItem('auth', 'true')
        } else {
            setIsShowing(true)
        }
    }

    return (
        <div>
            <form onSubmit={login} className='form'>
                <TestServiceInput
                    value={log.login}
                    onChange={changeLogin}
                    type='text'
                    placeholder='Введите логин' />
                <TestServiceInput
                    value={log.password}
                    onChange={changePassword}
                    type='password'
                    placeholder='Введите пароль' />
                {isShowing
                    ? <div style={{ color: 'red' }}>Неверный логин или пароль.</div>
                    : <div style={{ height: '20px' }} />
                }
                <TestServiceButton>Войти</TestServiceButton>
            </form>
        </div>
    )
}

export default Login