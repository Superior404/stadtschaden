import LandingPage from "./components/screens/LandingPage";
import Nav from "./components/common/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/screens/ContactPage";
import InstructionPage from "./components/screens/InstructionPage";
import NewsPage from "./components/screens/NewsPage";
import AboutUsPage from "./components/screens/AboutUsPage";
import NotFoundPage from "./components/screens/NotFoundPage";

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
        <Route path="worker" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
