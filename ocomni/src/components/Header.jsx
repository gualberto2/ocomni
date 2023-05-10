import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  // const [pageState, setPageState] = useState("Sign In");
  const location = useLocation();
  const navigate = useNavigate();
  // const auth = getAuth();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setPageState("Profile");
  //     } else {
  //       setPageState("Sign In");
  //     }
  //   });
  // }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="flex flex-row justify-between items-center  mxa-w-6xl mx-auto h-10 px-10">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Ocomni Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-8 ">
            <li
              className={`cursor-pointer font-semibold text-sm text-slate-500 border-b-3px border-b-transparent ${
                pathMatchRoute("/") && ""
              }`}
            >
              Home
            </li>
            <li
              className={`cursor-pointer font-semibold text-sm text-gray-400 border-b-3px border-b-transparent`}
            >
              Blog
            </li>
            <li
              className={`cursor-pointer font-semibold text-sm text-gray-400 border-b-3px border-b-transparent`}
            >
              Contact Us
            </li>
            <li
              className={`cursor-pointer font-semibold text-sm text-gray-400 border-b-3px border-b-transparent`}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
