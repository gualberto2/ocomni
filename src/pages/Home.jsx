import React from "react";
import Template from "../components/Templates";
import { Ourwork } from "../components/Ourwork";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="mx-8">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 pt-16 pb-10 md:pt-32 md:pb-36  ">
        <div className="">
          {" "}
          <h1 className="text-5xl md:text-7xl xl:text-8xl lg:w-[79%] font-extrabold ">
            ECommerce Powered by <span className="text-[#5B45BB]">OCOMNI</span>
          </h1>
          <p className="mt-2 sm:mt-4 sm:text-xl">
            Professional grade E-Commerce Web Development Solutions
          </p>
          <button className="mt-4 text-white bg-[#6366F1] text-center shadow-lg rounded-md px-8 py-3 active:bg-[#5B45BB] hover:bg-[#5F56D6] transition ease-in-out duration-150">
            <Link className="">Work with us</Link>
          </button>
          <img
            className="lg:hidden md:hidden mt-8 rounded-lg"
            src="https://raw.githubusercontent.com/akibiaons/ocomni-art/main/ocomni/public/ocomni-home.png"
            alt="e-commerce illistration 1"
          />
        </div>
        <div className="hidden lg:block md:block">
          <img
            className="inset-0 w-full mt-10"
            src="https://raw.githubusercontent.com/akibiaons/ocomni-art/main/ocomni/public/ocomni-home.png"
            alt="e-commerce illistration 2"
          />
        </div>
      </div>
      <Template />
      <Ourwork />
      <div className="flex flex-col justify-center md:justify-around align-center md:flex-row gap-8 mb-10">
        <div className="">
          <ContactForm />
        </div>
        <img
          src="https://i.kym-cdn.com/photos/images/original/001/340/774/55f"
          alt=""
          className="rounded-md jusitfy-center align-center"
        />
      </div>
    </div>
  );
}
