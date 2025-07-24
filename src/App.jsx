import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/static_external_pages/LandingPage";
import PrivacyPolicy from "./pages/static_external_pages/PrivacyPolicy";

// Create a separate component for hash handling that's inside the Router
const HashScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <HashScrollHandler />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
