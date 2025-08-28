// Updated App.js
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
import DefaultLayout from "./components/layout/DefaultLayout";
import PartnerLayout from "./components/layout/PartnerLayout";
import PrescriptionPage from "./pages/static_external_pages/PrescriptionPage";
import GroceryPage from "./pages/static_external_pages/GroceryPage";
import PartnerWithUsPage from "./pages/static_external_pages/PartnerWithUsPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/prescriptions"
            element={
              <DefaultLayout>
                <PrescriptionPage />
              </DefaultLayout>
            }
          />

          <Route
            path="/groceries"
            element={
              <DefaultLayout>
                <GroceryPage />
              </DefaultLayout>
            }
          />

          <Route
            path="/partner"
            element={
              <PartnerLayout>
                <PartnerWithUsPage />
              </PartnerLayout>
            }
          />

          <Route
            path="/privacy-policy"
            element={
              <DefaultLayout>
                <PrivacyPolicy />
              </DefaultLayout>
            }
          />

          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;