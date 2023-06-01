import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GrLineChart } from "react-icons/gr";
import { MdPhonelink } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { Link } from "react-router-dom";

{
  /*Our work will be a 3-cols by 3-rows grid that will serve to upsell and show our benefits. Take a look or ask for the Shopify letter for an example.*/
}
export const Ourwork = () => {
  return (
    <div className="my-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/*This connects all the cards in a 3 by 3 grid.*/}
        <div className="border border-black p-4">
          {" "}
          {/* This seems to be the container for "card 1" which consists of the border */}
          <div className="flex items-center">
            {" "}
            {/* This is the main container for card 1 whihc contains flex to makes svg icon and desc appear side by side  */}
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
          {/* So we first have a div for the border with class names that give it one. */}
          <div className="flex items-center">
            {" "}
            {/* The next div aligns the svg and text, with flex */}
            <GrLineChart className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Marketing</span>
          </div>{" "}
          {/* Above was the span with the icons, might need some help importing the icons with chat gpt */}
          <p className="mt-2">
            {" "}
            {/* Next is the <p> tag for the description of the card...*/}
            Our built in analytics identify & help you target ideal shoppers,
            kepping your SEO, social media, and paid advertising costs low and
            conversions high.
          </p>
        </div>
        <div className="border border-black p-4">
          {/* So we first have a div for the border with class names that give it one. */}
          <div className="flex items-center">
            {" "}
            {/* The next div aligns the svg and text, with flex */}
            <MdPhonelink className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Interactive</span>
          </div>{" "}
          {/* Above was the span with the icons, might need some help importing the icons with chat gpt */}
          <p className="mt-2">
            {" "}
            {/* Next is the <p> tag for the description of the card...*/}
            You'll be a part of the design & development process in real time
            with real people!
          </p>
        </div>
        <div className="border border-black p-4">
          {/* So we first have a div for the border with class names that give it one. */}
          <div className="flex items-center">
            {" "}
            {/* The next div aligns the svg and text, with flex */}
            <CiMoneyBill className="text-3xl mr-3" />
            <span className="text-xl font-semibold">Budget Friendly</span>
          </div>{" "}
          {/* Above was the span with the icons, might need some help importing the icons with chat gpt */}
          <p className="mt-2">
            {" "}
            {/* Next is the <p> tag for the description of the card...*/}
            We have many budget firendly tiers for newbies to enterprise
            comapnies.
          </p>
        </div>
      </div>
      <div className="flex justify-left md:justify-left lg:justify-left">
        {" "}
        {/* Here is the CTA button that links to the contact us form.*/}
        <button className="rounded mt-4 px-7 py-3 bg-[#6366F1] text-white relative group overflow-hidden c-btn tracking-wider shadow-lg">
          <Link>Project Calculators</Link> {/* Link to the contqct us form */}
        </button>
      </div>
    </div>
  );
};
