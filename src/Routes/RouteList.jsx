import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserDetails from "../Pages/UserDetail"; 
import Home from "../Pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../Component/Navbar";
import Dashboard from "../Component/Dashboard";


export const routeList = [
    {
        path: "/",
        element:(<>
                    <Navbar /> 
                    <Dashboard />
                </>)
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        )
    },
    {
        path: "/userdetail/:id",
        element: (
            <ProtectedRoute>
                <UserDetails />
            </ProtectedRoute>
        )
    }
];

export default routeList;
