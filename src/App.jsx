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
import PrescriptionPage from "./pages/static_external_pages/PrescriptionPage";
import GroceryPage from "./pages/static_external_pages/GroceryPage";

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
              <DefaultLayout>
                <div className="pt-20 px-4 text-center">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Partner With Us Page - Coming Soon</h1>
                  <p className="text-gray-600">Join our network of trusted delivery partners.</p>
                </div>
              </DefaultLayout>
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