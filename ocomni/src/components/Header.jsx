import React from "react";

export default function Header() {
  return (
    <div className="bg-[#ff0] border-b shadow-md sticky top-0 z-50 ">
      <header className="flex flex-row justify-between items-center  mxa-w-6xl mx-auto h-10 px-10">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="Ocomni Logo"
          />
        </div>
        <div>
          <ul className="flex space-x-8 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
