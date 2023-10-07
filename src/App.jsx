import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";
import "./tailwind.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const userIsAuthenticated = useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div className="bg-white text-center w-full h-screen">
        <Routes>
          <Route
            path="/"
            element={
              userIsAuthenticated ? (
                <Navigate to="/login" />
              ) : (
                <Navigate to="/signup" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
