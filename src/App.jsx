import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/static_external_pages/LandingPage";
import PrivacyPolicy from "./pages/static_external_pages/PrivacyPolicy";
import BlogPage from "./pages/dynamic_external_pages/BlogPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prescriptions" element={<div>Prescriptions Page - Coming Soon</div>} />
          <Route path="/groceries" element={<div>Groceries Page - Coming Soon</div>} />
          <Route path="/partner" element={<div>Partner With Us Page - Coming Soon</div>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;