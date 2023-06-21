import React, { useEffect, useState } from "react";
import Template from "../components/Templates";
import { Ourwork } from "../components/Ourwork";
import { Link } from "react-router-dom";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
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

  async function onSubmit(e) {
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
      <div className="py-16 md:py-32 lg:py-48 mx-auto ">
        {" "}
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-900">
          Ecommerce powered by{" "}
          <span className="text-[#5B45BB] font-OCOMNI">OCOMNI</span>
        </h1>
        <p className="mt-2 text-xl text-neutral-500 leading-normal text-center">
          Build the perfect E-Commerce shop, improve business and grow.
        </p>
        <button className="mt-4 active:bg-[#5B45BB] hover:bg-[#5F56D6] bg-[#6366F1] text-white text-center rounded-md px-6 py-3 mx-auto transition ease-in-out duration-150">
          <Link className="text-md text-center font-semibold">
            Talk to a Developer
          </Link>
        </button>
      </div>
      <Template />
      <Ourwork />
      <div className="flex flex-col justify-center md:justify-around align-center md:flex-row gap-8 mb-36">
        <div className="">
          <form onSubmit={onSubmit} className="max-w-sm mx-auto ">
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
                  value={first}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="last"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last"
                  value={last}
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block mb-1 font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={onChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
