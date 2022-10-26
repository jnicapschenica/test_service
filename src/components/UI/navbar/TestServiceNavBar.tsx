import React, { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import TestServiceButton from '../button/TestServiceButton'
import classes from './TestServiceNavBar.module.css'

const Navbar: FC = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to='/users' className={classes.navbar__item}>Пользователи</Link>
                <Link to='/tests' className={classes.navbar__item}>Тесты</Link>
            </div>
            <TestServiceButton onClick={logout}>
                Выход
            </TestServiceButton>
        </div>
    )
}

export default Navbar
