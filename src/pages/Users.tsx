import React, { FC } from 'react';
import List from '../components/List';
import { IUser } from '../types/types';
import User from '../components/User';
import { useNavigate } from "react-router-dom";
import { USERS } from '../data/UserList';

const Users: FC = () => {
    const router = useNavigate()

    return (
        <div className='list'>
            <List
                items={USERS}
                renderItem={(user: IUser) => <User onClick={(user) => router(`/users/${user.id}`)} user={user} key={user.id} />}
            />
        </div>
    )
}

export default Users
