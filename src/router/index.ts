import Tests from "../pages/Tests";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UserPage from "../pages/UserPage";
import NewTestPage from "../pages/NewTestPage";

export const privateRoutes = [
    {path: '/tests', element: Tests},
    {path: '/users', element: Users},
    {path: '/users/:id', element: UserPage},
    {path: '/tests/create', element: NewTestPage},
]

export const publicRoutes = [
    {path: '/login', element: Login},
]