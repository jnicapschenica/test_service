import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useParams } from "react-router-dom";
import { USERS } from '../data/UserList';
import TestServiceSelect from '../components/UI/select/TestServiceSelect';
import Stats from '../components/Stats';

type UserPageParams = {
    id: string;
}

const defaultUser: IUser = {
    id: 0,
    name: '',
    surname: '',
    stats: [],
}

const UserPage: FC = () => {
    const [user, setUser] = useState<IUser>(defaultUser)
    const [option, setOption] = useState<string>('')
    const [isShowing, setIsShowing] = useState<boolean>(false)
    const params = useParams<UserPageParams>()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = () => {
        const found: IUser | undefined = USERS.find(user => user.id.toString() === params.id)
        if (found) setUser(found)
    }

    const chooseTest = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(event.target.value)
        setIsShowing(true)
    }

    return (
        <div className='stats' style={{width:'800px'}}>
            <h1>Cтатистика пользователя {user?.name} {user?.surname} </h1>
            <TestServiceSelect
                defaultValue='Выберите тест'
                onChange={chooseTest}
                options={[
                    { value: '1', name: 'Фрукты' },
                    { value: '2', name: 'Овощи' },
                ]} />
            <div style={{ display: isShowing ? 'block' : 'none' }}>
                <Stats user={user} testId={option} />
            </div>

        </div>
    )
}

export default UserPage
