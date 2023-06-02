import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { MdPhonelink } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Ourwork = () => {
  return (
    <div className="my-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="border border-black p-4">
          {" "}
          <div className="flex items-center">
            <TbWorldWww className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Website</span>
          </div>
          <p className="mt-2">
            Your store your call. Use some of our free themes, or take advantage
            of our design team, get complete customization and stand out from
            the crowd
          </p>
        </div>
        {/* Below is card 2 */}
        <div className="border border-black p-4">
          <div className="flex items-center">
            <AiOutlineUnlock className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Secure</span>
          </div>
          <p className="mt-2">
            We partner with Stripe to deliver secure checkouts and avoid any
            fraudulent purhcases, protecting you and your shoppers.
          </p>
        </div>
        {/* Below is card 3 */}
        <div className="border border-black p-4">
          <div className="flex items-center">
            <BiSupport className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Support</span>
          </div>
          <p className="mt-2">
            Our relationship doesn't end when the project ends. We give
            continual support & updates to make your site faster and secure.
          </p>
        </div>
        {/* Below is card 4 */}
        <div className="border border-black p-4">
          <div className="flex items-center">
            {" "}
            <GrLineChart className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Marketing</span>
          </div>{" "}
          <p className="mt-2">
            {" "}
            Our built in analytics identify & help you target ideal shoppers,
            kepping your SEO, social media, and paid advertising costs low and
            conversions high.
          </p>
        </div>
        <div className="border border-black p-4">
          <div className="flex items-center">
            {" "}
            <MdPhonelink className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Interactive</span>
          </div>{" "}
          <p className="mt-2">
            {" "}
            You'll be a part of the design & development process in real time
            with real people!
          </p>
        </div>
        <div className="border border-black p-4">
          <div className="flex items-center">
            {" "}
            <CiMoneyBill className="text-3xl mr-3" />
            <span className="text-xl font-semibold">Budget Friendly</span>
          </div>{" "}
          <p className="mt-2">
            {" "}
            We have many budget firendly tiers for newbies to enterprise
            comapnies.
          </p>
        </div>
      </div>
      <div className="flex justify-left md:justify-left lg:justify-left">
        {" "}
        <button className="rounded-md active:bg-[#5B45BB] hover:bg-[#5F56D6] mt-4 px-8 py-3 bg-[#6366F1] text-white relative group overflow-hidden c-btn tracking-wider shadow-lg transition ease-in-out duration-150">
          <Link className="">Project Calculators</Link>
        </button>
      </div>
    </div>
  );
}; //bg-[#6366F1] text-center shadow-lg rounded-md px-8 py-3 active:bg-[#5B45BB] hover:bg-[#5F56D6] transition ease-in-out duration-150
