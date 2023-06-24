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
  const [pageState, setPageState] = useState("Login");
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Account");
      } else {
        setPageState("Login");
      }
      if (isRouteActive("/register")) {
        setPageState("Register");
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function isRouteActive(route) {
    return location.pathname === route;
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  return (
    <div
      className={`w-[75%] sm:w-[40%] lg:w-[70%] rounded-full mx-auto backdrop-blur bg-[#f8f9fa]/50 sticky top-1 z-50 `}
    >
      <header className="flex flex-col lg:flex-row lg:h-10 h-16 justify-center lg:justify-between items-center mxa-w-6xl mx-auto  px-10 py-10 z-50">
        <div>
          {/* className={` ${!visible && "hidden"}`} */}
          <h1
            onClick={() => navigate("/")}
            className={`uppercase text-[#5B45BB] cursor-pointer text-2xl sm:mt-1 lg:mr-6 font-OCOMNI`}
          >
            Ocomni
          </h1>
        </div>
        <div className="">
          <ul className="flex space-x-8">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer ${
                isRouteActive("/")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              <div className="lg:hidden">
                <HomeIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden lg:inline-block font-bold text-lg">
                Home
              </span>
            </li>
            <li
              onClick={() => navigate("/blog")}
              className={`cursor-pointer ${
                isRouteActive("/blog") || isRouteActive("")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] font-boldbody"
                  : "text-black "
              }`}
            >
              <div className="lg:hidden">
                <NewspaperIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden lg:inline-block font-semibold text-lg">
                Blog
              </span>
            </li>
            <li
              onClick={() => navigate("/contact")}
              className={`cursor-pointer ${
                isRouteActive("/contact")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              <div className="lg:hidden">
                <PhoneIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden lg:inline-block font-semibold text-lg">
                Contact
              </span>
            </li>
            <li
              onClick={() => navigate("/login")}
              className={`cursor-pointer ${
                isRouteActive("/login") ||
                isRouteActive("/account") ||
                isRouteActive("/register")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              <div className="lg:hidden">
                <UserIcon className="w-5 h-5 inline-block mr-1" />
              </div>
              <span className="hidden whitespace-nowrap lg:inline-block font-semibold text-lg">
                {pageState}
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
