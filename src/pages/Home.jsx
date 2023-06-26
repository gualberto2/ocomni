import React, { useEffect, useState } from "react";
import Template from "../components/Templates";
import { Ourwork } from "../components/Ourwork";
import { Link } from "react-router-dom";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  //Form data for the getting in contact with us form at bottom of home page
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
  });
  const { first, last, email, phone } = formData;
  function onChange(e) {
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }
  // form data for single input form at top of home page
  const [formDEV, setFormDEV] = useState({
    emailDEV: "",
  });
  const { emailDEV } = formDEV;
  function onChangeDEV(e) {
    if (!e.target.files) {
      setFormDEV((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }

  async function onSubmitDEV(e) {
    e.preventDefault();
    setLoading(true);
    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.formData;
    const docRef = await addDoc(collection(db, "contactDEV"), formDataCopy);
    setLoading(false);
    toast.success("Thank you. A developer will talk to you soon!");
  }

  async function onSubmitCONTACT(e) {
    e.preventDefault();
    setLoading(true);
    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
    };
    delete formDataCopy.formData;
    const docRef = await addDoc(collection(db, "contact"), formDataCopy);
    setLoading(false);
    toast.success(
      "Contact Information Submitted! We will get back to you soon :)"
    );
  }
  useEffect(() => {
    document.body.classList.add("page-animation");

    return () => {
      document.body.classList.remove("page-animation");
    };
  }, []);
  return (
    <div className="mx-6 ">
      <div className="py-16 md:py-32 lg:py-48 lg:h-screen mx-auto flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-900">
          Ecommerce powered by{" "}
          <span className="text-[#5B45BB] font-OCOMNI">OCOMNI</span>
        </h1>
        <p className="mt-2 text-xl text-neutral-500 leading-normal text-center">
          Build the perfect E-Commerce shop, improve business and grow.
        </p>
        <div className="w-full max-w-xl mt-2">
          <form
            className="flex  mx-auto flex-col sm:flex-row gap-3 sm:gap-2 "
            onSubmit={onSubmitDEV}
          >
            <div className="w-full">
              <input
                type="email"
                value={emailDEV}
                onChange={onChangeDEV}
                id="emailDEV"
                placeholder="Enter your email here..."
                className="transition duration-150 ease-in-out  py-3 rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent w-full"
              />
            </div>
            <button className="active:bg-[#5B45BB] hover:bg-[#5F56D6] bg-[#6366F1] text-white text-center rounded-md px-4 py-3 transition ease-in-out duration-150 whitespace-nowrap sm:w-[180px]">
              <Link className="text-md text-center font-semibold">
                Talk to a Developer
              </Link>
            </button>
          </form>
        </div>
        <p className="mt-2 text-neutral-500 text-sm leading-normal text-center">
          Leave us your email. We'll get in contact with you.
        </p>
        <p className="text-neutral-500 text-sm leading-normal text-center">
          You can also create an account. Get started{" "}
          <span className="text-purple-300 cursor-pointer hover:text-purple-400 transition font-semibold duration-150 ease-in text-center hover:border-b-[1px] hover:border-purple-400">
            here 🔗
          </span>{" "}
          it's free
        </p>
        {/* <span className="flex flex-row text-purple-300 cursor-pointer hover:text-purple-400 transition duration-150 ease-in text-center">
            here
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="currentColor"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span> */}
        <p className="text-neutral-500 text-sm leading-normal justify-center items-center flex flex-row text-center"></p>
      </div>

      <Template />
      <Ourwork />
      <div className="flex flex-col justify-center md:justify-around align-center md:flex-row gap-8 mb-36">
        <div className="">
          <form onSubmit={onSubmitCONTACT} className="max-w-sm mx-auto ">
            <div className="container mx-auto">
              <h3 className="text-center mt-2 text-gray-800 text-2xl font-semibold mb-4">
                Get In Touch with us today for an E-Commerce Consultation
              </h3>
            </div>
            <div className="mb-4 flex">
              <div className="mr-2 flex-1">
                <label htmlFor="first" className="block mb-1  text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first"
                  placeholder="ex. John"
                  value={first}
                  onChange={onChange}
                  className="w-full px-3 py-2 bg-gray-200 border-gray-200 focus:bg-gray-300  rounded-md focus:ring-transparent focus:border-blue-800 border-[1px] "
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="last" className="block mb-1  text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last"
                  placeholder="ex. Wick"
                  value={last}
                  onChange={onChange}
                  className="w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md "
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="johnwick@email.com"
                onChange={onChange}
                className="w-full px-3 py-2 focus:ring-transparent bg-gray-200 focus:bg-gray-300 border-gray-200 focus:border-blue-800 border-[1px] rounded-md text-gray-700  "
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={onChange}
                placeholder="(123)-456-7890"
                className="w-full px-3 py-2 bg-gray-200 border-gray-200 focus:bg-gray-300 rounded-md focus:ring-transparent focus:border-blue-800 border-[1px]"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-md mt-4 w-full text-md  font-semibold py-3 bg-[#6366F1] text-white hover:text-white overflow-hidden transition ease-in-out duration-150  hover:bg-[#5F56D6] active:bg-[#5B45BB]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

{
  /* <button className="rounded-md active:bg-[#5B45BB] hover:bg-[#5F56D6] bg-[#6366F1] mt-4 px-6 py-3  text-white shadow-md transition ease-in-out duration-150 w-[55%]">
<Link className="text-md font-semibold ">Project Calculators</Link>
</button> */
}
