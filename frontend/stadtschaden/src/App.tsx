import LandingPage from "./components/screens/LandingPage";
import Nav from "./components/common/Nav";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContactPage from "./components/screens/ContactPage";
import InstructionPage from "./components/screens/InstructionPage";
import NewsPage from "./components/screens/NewsPage";
import AboutUsPage from "./components/screens/AboutUsPage";
import NotFoundPage from "./components/screens/NotFoundPage";
import PersonalLogin from "./components/screens/PersonalLogin";
import StaffTicketOverview from "./staffSpecific/Screens/StaffTicketOverview";
import StaffNav from "./staffSpecific/Designs/StaffNav";
import AuthReroute from "./staffSpecific/Designs/AuthReroute";

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
          element={<h1 className="text-balck"> selber Schuld </h1>}
        />

        {/* error page  */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* private part for staff */}
      <Route path="staff" element={<AuthReroute />}>
        <Route path="" element={<StaffNav />}>
          <Route path="" element={<Navigate to="home" />} />
          <Route path="home" element={<StaffTicketOverview />} />
          <Route
            path="/staff/ticket/:ticketID"
            //element={<SingleTicketPage/>}
            element={<></>}
          />

          {/* error page  */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
