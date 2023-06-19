import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div class=" ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://ocomni.com/" class="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Ocomni Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap  uppercase font-title">
              Ocomni
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 hover:cursor-pointer">
            <li className="mr-4 hover:underline md:mr-6 "> About</li>

            <li
              class="mr-4 hover:underline hover:cursor-pointer md:mr-6"
              onClick={() => navigate("/privacy-policy")}
            >
              Privacy Policy
            </li>
            <li>
              <a
                href="#"
                class="mr-4 hover:underline md:mr-6 hover:cursor-pointer"
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-[gray] sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://ocomni.com/" class="hover:underline">
            Ocomni™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
