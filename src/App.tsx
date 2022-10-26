import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import AppRouter from './components/AppRouter';

const App = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
