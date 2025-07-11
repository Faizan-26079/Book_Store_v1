import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const [authUser] = useAuth();
  return authUser ? children : <Navigate to="/signup" />;
};

// Layout component (for theming, structure, future header/footer use)
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      {/* Optional: Add header here */}
      {children}
      {/* Optional: Add footer here */}
    </div>
  );
};

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </Layout>
    </>
  );
}

export default App;
