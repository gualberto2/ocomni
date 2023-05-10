import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function isRouteActive(route) {
    return location.pathname === route;
  }

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="flex flex-row justify-between items-center mxa-w-6xl mx-auto h-10 px-10 z-50">
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
              className={`cursor-pointer text-sm font-semibold ${
                isRouteActive("/")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/blog")}
              className={`cursor-pointer text-sm font-semibold ${
                isRouteActive("/blog")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              Blog
            </li>
            <li
              onClick={() => navigate("/contact")}
              className={`cursor-pointer text-sm font-semibold ${
                isRouteActive("/contact")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              }`}
            >
              Contact
            </li>
            <li
              onClick={() => navigate("/sign-in")}
              className={`cursor-pointer font-semibold text-sm ${
                isRouteActive("/sign-in")
                  ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
                  : "text-black "
              } `}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
