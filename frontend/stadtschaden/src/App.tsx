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
import NotFoundPage from "./components/screens/NotFoundPage";
import PersonalLogin from "./components/screens/PersonalLogin";
import StaffTicketOverview from "./staffSpecific/Screens/StaffTicketOverview";
import StaffNav from "./staffSpecific/Designs/StaffNav";
import AuthReroute from "./staffSpecific/Designs/AuthReroute";
import TicketPage from "./staffSpecific/Screens/TicketPage";
import AccountPage from "./staffSpecific/Screens/AccountPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* public facing website */}
      <Route element={<Nav />}>
        <Route index element={<LandingPage />} />
        <Route path="instruction" element={<InstructionPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* login page is actualy still public */}
        <Route path="login" element={<PersonalLogin />} />

        <Route
          path="nopw"
          element={
            <h1 className="text-balck text-3xl text-center w-full p-6 h-svh">
              Please contact admin
            </h1>
          }
        />

        {/* error page  */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* private part for staff */}
      <Route path="staff" element={<AuthReroute />}>
        <Route element={<StaffNav />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<StaffTicketOverview />} />
          <Route path="ticket/:ticketId" element={<TicketPage />} />
          <Route path="account" element={<AccountPage />} />

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
