import LandingPage from "./components/screens/LandingPage";
import Nav from "./components/common/Nav";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContactPage from "./components/screens/ContactPage";
import InstructionPage from "./components/screens/InstructionPage";
import NewsPage from "./components/screens/NewsPage";
import AboutUsPage from "./components/screens/AboutUsPage";
import NotFoundPage from "./components/screens/NotFoundPage";
import PersonalLogin from "./components/screens/PersonalLogin";

function isSessionCookieValid() {
  //todo query api if valid

  return false; //!(document.cookie.indexOf('session_cookie=') == -1);
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* public facing website */}
      <Route path="" element={<Nav />}>
        <Route path="" element={<LandingPage />} />
        <Route path="instruction" element={<InstructionPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="test" element={<PersonalLogin />} />

        {/* login page is actualy still public */}
        <Route path="login" element={<PersonalLogin />} />
        <Route
          path="altzheimer"
          element={<h1 className="text-white"> selber Schuld </h1>}
        />

        {/* error page  */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* private part for staff */}
      <Route
        path="staff"
        element={
          <>
            {" "}
            <Outlet /> {isSessionCookieValid() ? (
              ""
            ) : (
              <Navigate to="/login" />
            )}{" "}
          </>
        }
      >
        <Route path="" element={<Navigate to="home" />} />
        <Route
          path="home"
          element={<h1 className="text-white">staff home page </h1>}
        />
        <Route
          path="Ticket"
          element={<h1 className="text-white">Page to work on a Ticket </h1>}
        />
      </Route>
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
