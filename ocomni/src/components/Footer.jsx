import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="bg-slate-200 shadow dark:bg-slate-600">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://ocomni.com/" class="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Ocomni Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase font-title">
              Ocomni
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4 hover:underline md:mr-6 "> About</li>
            <li>
              <Link
                to="../pages/PrivacyPolicy"
                class="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-[] sm:mx-auto dark:border-[white] lg:my-8" />
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
