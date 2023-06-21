import React, { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { MdPhonelink } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Ourwork = () => {
  const [showAll, setShowAll] = useState(false);

  const items = [
    {
      icon: <TbWorldWww className="text-2xl mr-3" />,
      title: "Website",
      description:
        "Your store your call. Use some of our free themes, or take advantage of our design team, get complete customization and stand out from the crowd.",
    },
    {
      icon: <AiOutlineUnlock className="text-2xl mr-3" />,
      title: "Secure",
      description:
        "We partner with Stripe to deliver secure checkouts and avoid any fraudulent purchases, protecting you and your shoppers.",
    },
    {
      icon: <BiSupport className="text-2xl mr-3" />,
      title: "Support",
      description:
        "Our relationship doesn't end when the project ends. We give continual support & updates to make your site faster and secure.",
    },
    {
      icon: <GrLineChart className="text-2xl mr-3" />,
      title: "Marketing",
      description:
        "Our built-in analytics identify & help you target ideal shoppers, keeping your SEO, social media, and paid advertising costs low and conversions high.",
    },
    {
      icon: <MdPhonelink className="text-2xl mr-3" />,
      title: "Interactive",
      description:
        "You'll be a part of the design & development process in real time with real people!",
    },
    {
      icon: <CiMoneyBill className="text-3xl mr-3" />,
      title: "Budget Friendly",
      description:
        "We have many budget-friendly tiers for newbies to enterprise companies.",
    },
  ];
  const visibleItems = showAll ? items : items.slice(0, 3);
  return (
    <div className="mb-36 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className={`border border-black p-4 ${!showAll ? "" : ""}`}
          >
            <div className="flex items-center">
              {item.icon}
              <span className="text-xl font-semibold">{item.title}</span>
            </div>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={() => setShowAll((prevState) => !prevState)}
          className={`rounded-lg bg-[#ECEBFF] hover:bg-[#D9DAFC] active:bg-[#ECEDFD] text-[#6663FD] mt-4 px-8 py-2 w-[30%] font-medium transition ease-in-out duration-150 ${
            !showAll ? "block" : ""
          }`}
        >
          <p className="text-lg font-medium ">
            {showAll ? "See Less cards 🫣" : "Show all cards 👁"}
          </p>
        </button>
      </div>
    </div>
  );
}; //bg-[#6366F1] text-center shadow-lg rounded-md px-8 py-3 active:bg-[#5B45BB] hover:bg-[#5F56D6] transition ease-in-out duration-150
