import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  NewspaperIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";

export default function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  });
  function isRouteActive(route) {
    return location.pathname === route;
  }

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="flex flex-col md:flex-row md:h-10 h-20 justify-around md:justify-between   items-center mxa-w-6xl mx-auto h-10 px-10 z-50">
        <div>
          <h1
            onClick={() => navigate("/")}
            className="uppercase  text-[#5B45BB] cursor-pointer text-xl font-title"
          >
            Ocomni
          </h1>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer ${
                isRouteActive("/")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              <div className="md:hidden">
                <HomeIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden md:inline-block font-bold">Home</span>
            </li>
            <li
              onClick={() => navigate("/blog")}
              className={`cursor-pointer ${
                isRouteActive("/blog")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] font-bold"
                  : "text-black "
              }`}
            >
              <div className="md:hidden">
                <NewspaperIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden md:inline-block font-bold">Blog</span>
            </li>
            <li
              onClick={() => navigate("/contact")}
              className={`cursor-pointer ${
                isRouteActive("/contact")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              <div className="md:hidden">
                <PhoneIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden md:inline-block font-bold">Contact</span>
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={`cursor-pointer ${
                isRouteActive("/sign-in") || isRouteActive("/profile")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              <div className="md:hidden">
                <UserIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden md:inline-block font-bold">
                {pageState}
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
