import { navLinks } from "../StaffNavLinks";
import stadtschadenLogo from "../../assets/images/stadtschaden-logo.png";
import stadtschadenLogoSmall from "../../assets/images/stadtschaden-logo-smal.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useToken from "../getToken";

const Nav = () => {
  const navigate = useNavigate();
  const { deleteToken } = useToken();

  const logout = () => {
    deleteToken();
    navigate("/login");
  };

  return (
    <>
      <header className="flex bg-darkgray h-14 ">
        <div className=" md:w-40 w-16">
          <Link to="/">
            <img
              src={stadtschadenLogoSmall}
              alt="Logo"
              className="absolute w-8 ml-3 mt-3 block md:hidden" // Show for small screens only
            />
            <img
              src={stadtschadenLogo}
              alt="Logo"
              className="absolute w-48 ml-3 mt-3 hidden md:block" // Show for medium and larger screens
            />
          </Link>
        </div>

        <ul
          className={`lg:flex flex-1 flex justify-center items-center flex-row  gap-2`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="flex justify-end mr-6">
              <NavLink
                className={({ isActive }) =>
                  "font-palanquin font-bold  text-lg justify-center items-center " +
                  (isActive ? "text-primary" : "text-white")
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mr-3 content-center ">
          <button
            id="logout-button"
            className="mr-3 py-1 px-3 rounded-full text-white font-primary bg-primary"
            onClick={logout}
          >
            logout
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
