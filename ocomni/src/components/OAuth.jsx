import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex justify-center items-center w-full bg-[#F4B400] hover:bg-[#A38B00] uppercase text-white px-7 py-3 text-sm font-medium rounded transition duration-150 ease-in-out shadow-md hover:shadow-lg active:shadow-xl">
      <FcGoogle className="bg-white rounded-full mr-2 text-2xl " />
      Sign In with Google
    </button>
  );
}
