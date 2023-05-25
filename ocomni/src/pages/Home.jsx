import React from 'react';

export default function HomePage() {
  return (
    <div className="w-full  px-10 lg:px-28 lg:h-screen overflow-hidden">
      <div className="lg:flex lg:pt-8">
        <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
          <h1 className=" font-extrabold font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-black xl:leading-[5rem] md:leading-[4rem]">
            E-Commerce Powered by <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#471FF7] to-[#471FF7]">OCOMNI</span>
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-[#000000] to-[#000000]">Professional grade E-Commerce Solutions</p>
        </div>
        <div className="xl:flex justify-start mt-7">
          <div> {/* TRY TO ADD SVG IMG BELOW FOR RESPONSIVENESS */}
            <button className="rounded px-7 py-3 bg-[#471FF7] text-white relative group hover:text-white overflow-hidden tracking-wider">
                <span className="relative inset-0 flex justify-center items-center">
                  Work with us
                </span>
            </button>
          </div>
        </div>
      </div>
      <div> {/* THIS IS WHERE CTA BUTTON GOES */}
      <div className="xl:flex justify-start mt-7">
          <div> {/* TRY TO ADD SVG IMG BELOW FOR RESPONSIVENESS */}
            <button className="rounded px-7 py-3 bg-[#471FF7] text-white relative group hover:text-white overflow-hidden tracking-wider">
                <span className="relative inset-0 flex justify-center items-center">
                
                </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
