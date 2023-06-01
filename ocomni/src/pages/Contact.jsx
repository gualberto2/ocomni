import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-medium py-10 px-20 md:whitespace-nowrap">
          We wanna hear from <em className="uppercase">You</em>.
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 sm: gap-6 mx-12 md:gap-0 md:justify-around">
        <div className="">
          <div className="border-2 border-black p-4">Box</div>
        </div>
        <div className="">
          <div className="border-2 border-black p-4">Box</div>
        </div>
        <div className="">
          <div className="border-2 border-black p-4">Box</div>
        </div>
        <div className="">
          <div className="border-2 border-black p-4">Box</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
