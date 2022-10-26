import { createContext } from "react";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: (value:boolean) => void;
}

const defaultValue: IAuthContext = {
    isAuth: false,
    setIsAuth: () => { },
};

export const AuthContext = createContext<IAuthContext>(defaultValue)