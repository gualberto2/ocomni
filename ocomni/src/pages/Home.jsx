import React from "react";
import Template from "../components/Templates";
import { Ourwork } from "../components/Ourwork";
import ContactForm from "../components/HomeForm";

export default function HomePage() {
  return (
    <div className="mx-8">
      {" "}
      {/* Parent div of "body" for the homepage. Don't really need to mess with or edit. */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 pt-16 pb-10 md:pt-32 md:pb-36  ">
        <div className="">
          {" "}
          {/* Parent div of h1, p, button, and svg for homepage will add some padding and max width */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl lg:w-[79%] font-extrabold ">
            ECommerce Powered by <span className="text-[#5B45BB]">OCOMNI</span>
          </h1>
          <p className="mt-2 sm:mt-4 sm:text-xl">
            Professional grade E-Commerce Web Development Solutions
          </p>
          <button className="rounded mt-4 px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
            <span className="">Work with us</span>
          </button>
          <img
            className="lg:hidden md:hidden mt-8"
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
      <ContactForm />
    </div>
  );
}
