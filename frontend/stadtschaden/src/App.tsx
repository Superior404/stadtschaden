import LandingPage from "./components/screens/LandingPage";
import Nav from "./components/common/Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactPage from "./components/screens/ContactPage";
import InstructionPage from "./components/screens/InstructionPage";
import NewsPage from "./components/screens/NewsPage";
import AboutUsPage from "./components/screens/AboutUsPage";
import NotFoundPage from "./components/screens/NotFoundPage";
import PersonalLogin from "./components/screens/PersonalLogin";


function isSessionCookieValid() {
  //todo query api if valid 
  return document.cookie.split(';').some((item) => item.trim().startsWith('session='));
}

// Private Route component
const PrivateRoute: React.FC<{ path: string, element: React.ReactNode }> = ({ path, element }) => {
  return isSessionCookieValid() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/worker/login" />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="instruction" element={<InstructionPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        {/* TODO insert Worker path - LS */}
        <PrivateRoute path="worker/login" element={<PersonalLogin />} /> {/* Public part behind /worker/ */}
        <PrivateRoute path="worker/*" element={<Navigate to="/worker/login" />} /> {/* Redirect unauthorized access */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
