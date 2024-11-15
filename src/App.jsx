import React from "react";
import Home from "./home/Home";
import ProductUploadForm from "./components/ProductUploadForm";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import  ContactPage from "../src/components/ContactPage"
import  AboutPage from "../src/components/AboutPage"

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route
            path="/ProductUploadForm"
            element={authUser ? <ProductUploadForm /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
