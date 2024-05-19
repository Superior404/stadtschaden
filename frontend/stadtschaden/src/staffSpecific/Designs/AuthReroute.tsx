import useToken from "../getToken";
import { Navigate, Outlet } from "react-router-dom";

const AuthReroute = () => {
  const { token, checkToken } = useToken();

  checkToken();

  return <>{token === null ? <Navigate to="/login" /> : <Outlet />}</>;
};

export default AuthReroute;
