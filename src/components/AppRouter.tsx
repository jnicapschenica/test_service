import React, { FC, useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from '../context'
import { publicRoutes, privateRoutes } from '../router'
import Navbar from './UI/navbar/TestServiceNavBar'

const AppRouter: FC = () => {
    const { isAuth } = useContext(AuthContext)

    return (
        isAuth
            ?
            <div className='wrapper'>
                <Navbar />
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={<route.element />} key={route.path} />
                    )}
                    <Route path="/*" element={<Navigate to="/users" replace />} />
                </Routes>
            </div>
            :
            <div className='login'>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={<route.element />} key={route.path} />
                    )}
                    <Route path="/*" element={<Navigate to="/login" replace />} />
                </Routes>
            </div>
    )
}

export default AppRouter
