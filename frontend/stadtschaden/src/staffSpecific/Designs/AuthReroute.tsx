import useToken from '../getToken';
import { Navigate, Outlet } from 'react-router-dom';

const AuthReroute = () => {
    const { token } = useToken();

    return (
        <>
            {token == null ? <Navigate to="/login"/>:  <Outlet/>}  
        </>
    )
}

export default AuthReroute