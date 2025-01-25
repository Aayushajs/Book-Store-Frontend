import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/" className="hover:text-indigo-500 transition">Home</a>
      </li>
      <li>
        <a href="/course" className="hover:text-indigo-500 transition">Books</a>
      </li>
      <li>
        <a href="/Contact" className="hover:text-indigo-500 transition">Contact</a>
      </li>
      <li>
        <a href="/About" className="hover:text-indigo-500 transition">About</a>
      </li>
      <li>
        <a href="/ProductUploadForm" className="hover:text-indigo-500 transition">Book Upload</a>
      </li>
    </>
  );

  return (
    <div
      className={`w-full fixed z-50 transition-all duration-300 ${
        sticky
          ? "bg-white dark:bg-gray-800 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Left */}
        <div className="flex items-center">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul className="dropdown-content mt-3 p-2 shadow bg-white dark:text-white dark:bg-black text-black rounded-lg w-52">
              {navItems}
            </ul>
          </div>
          <a
            href="/"
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            bookStore
          </a>
        </div>

        {/* Center */}
        <div className="hidden lg:flex space-x-8">
          <ul className="flex space-x-6">{navItems}</ul>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <input
              type="text"
              className="px-4 py-2 rounded-lg border dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Search"
            />
          </div>
          <button
            className="rounded-full p-2 bg-gray-200 dark:bg-gray-600"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m4.22 1.78l-.7.7m5.48 4.52h-1m-2.66 5.66l.7-.7m-1.06-5.48v-1m-4.52 1.06l-.7-.7m-5.66 2.66h1m1.06 4.52l-.7-.7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m4.22 1.78l-.7.7m5.48 4.52h-1m-2.66 5.66l.7-.7m-1.06-5.48v-1m-4.52 1.06l-.7-.7m-5.66 2.66h1m1.06 4.52l-.7-.7"
                />
              </svg>
            )}
          </button>

          {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
