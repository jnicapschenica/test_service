import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserProps {
    user: IUser,
    onClick: (user: IUser) => void;
}

const User: FC<UserProps> = ({ user, onClick }) => {
    return (
        <div className='item' onClick={() => onClick(user)}>
            {user.name} {user.surname}
        </div>
    )
}

export default User
