import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  NewspaperIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";

//-----------Expiremental
export default function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
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
      if (isRouteActive("/sign-up")) {
        setPageState("Sign Up");
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
    <div className={`bg-white  shadow-md sticky top-0 z-50 `}>
      <header className="flex flex-col md:flex-row md:h-10 h-20 justify-around md:justify-between items-center mxa-w-6xl mx-auto h-10 px-10 z-50">
        <div>
          {/* className={` ${!visible && "hidden"}`} */}
          <h1
            onClick={() => navigate("/")}
            className={`uppercase text-[#5B45BB] cursor-pointer text-xl font-title`}
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
                isRouteActive("/sign-in") ||
                isRouteActive("/profile") ||
                isRouteActive("/sign-up")
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

//-----------MAIN
// export default function Header() {
//   const [pageState, setPageState] = useState("Sign In");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const auth = getAuth();
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setPageState("Profile");
//       } else {
//         setPageState("Sign In");
//       }
//       if (isRouteActive("/sign-up")) {
//         setPageState("Sign Up");
//       }
//     });
//   });
//   function isRouteActive(route) {
//     return location.pathname === route;
//   }

//   return (
//     <div className="bg-white shadow-md sticky top-0 z-50">
//       <header className="flex flex-col md:flex-row md:h-10 h-20 justify-around md:justify-between   items-center mxa-w-6xl mx-auto h-10 px-10 z-50">
//         <div>
//           <h1
//             onClick={() => navigate("/")}
//             className="uppercase  text-[#5B45BB] cursor-pointer text-xl font-title"
//           >
//             Ocomni
//           </h1>
//         </div>
//         <div>
//           <ul className="flex space-x-8">
//             <li
//               onClick={() => navigate("/")}
//               className={`cursor-pointer ${
//                 isRouteActive("/")
//                   ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
//                   : "text-black "
//               }`}
//             >
//               <div className="md:hidden">
//                 <HomeIcon className="w-5 h-5 inline-block mr-1" />
//               </div>
//               <span className="hidden md:inline-block font-bold">Home</span>
//             </li>
//             <li
//               onClick={() => navigate("/blog")}
//               className={`cursor-pointer ${
//                 isRouteActive("/blog")
//                   ? "text-[#5B45BB] border-b-2 border-[#5B45BB] font-bold"
//                   : "text-black "
//               }`}
//             >
//               <div className="md:hidden">
//                 <NewspaperIcon className="w-5 h-5 inline-block mr-1" />
//               </div>
//               <span className="hidden md:inline-block font-bold">Blog</span>
//             </li>
//             <li
//               onClick={() => navigate("/contact")}
//               className={`cursor-pointer ${
//                 isRouteActive("/contact")
//                   ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
//                   : "text-black "
//               }`}
//             >
//               <div className="md:hidden">
//                 <PhoneIcon className="w-5 h-5 inline-block mr-1" />
//               </div>
//               <span className="hidden md:inline-block font-bold">Contact</span>
//             </li>
//             <li
//               onClick={() => navigate("/profile")}
//               className={`cursor-pointer ${
//                 isRouteActive("/sign-in") ||
//                 isRouteActive("/profile") ||
//                 isRouteActive("/sign-up")
//                   ? "text-[#5B45BB] border-b-2 border-[#5B45BB] "
//                   : "text-black "
//               }`}
//             >
//               <div className="md:hidden">
//                 <UserIcon className="w-5 h-5 inline-block mr-1" />
//               </div>
//               <span className="hidden md:inline-block font-bold">
//                 {pageState}
//               </span>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// }

//#6366F1
//#5F56D6
//#5B45BB
//--Button Styling--
//transition ease-in-out duration-150 bg-[#6366F1] hover:bg-[#5F56D6] active:bg-[#5B45BB] px-8 py-3
//--or--
//bg-[#6366F1] text-center shadow-lg rounded-md px-8 py-3 active:bg-[#5B45BB] hover:bg-[#5F56D6] transition ease-in-out duration-150
