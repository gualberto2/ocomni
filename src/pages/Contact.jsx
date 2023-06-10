import React from "react";
import { TbWorldWww } from "react-icons/tb";

// keep p tag words 20 words long, will keep each box same size usually

const ContactPage = () => {
  return (
    <div className="">
      <div className="my-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className=" py-28 px-20">
          <h1 className="text-6xl tracking-wider text-center font-light  md:whitespace-nowrap pb-8">
            We wanna hear from <em className="uppercase">You</em>.
          </h1>
          <p className="mb-12 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            dolorem ea. Unde, recusandae doloribus amet eaque obcaecati nihil
            quos expedita quo aperiam ea minus provident delectus dicta possimus
            mollitia aliquam. Culpa, expedita!
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 mx-12 md:gap-8 md:justify-around mt-10">
          <div className="min-w-[170px] max-w-[300px] mx-auto">
            <div className="border border-black p-4">
              <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-yellow-300 ">
                Sales
              </h3>
              <p className=" leading-8 font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                nam exercitationem magnam magni. Modi at reprehenderit facilis
                sed, sint et!
              </p>
              <div className="flex justify-center items">
                <button className="transition ease-in-out duration-150 bg-[#6366F1] hover:bg-[#5F56D6] active:bg-[#5B45BB] px-8 py-3 rounded-lg text-white mt-4">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-[170px] max-w-[300px] mx-auto">
            <div className="border border-black p-4">
              <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-green-300 ">
                Support
              </h3>
              <p className="leading-8 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                voluptates expedita dolorem corrupti debitis perspiciatis
                eveniet! Soluta quas veniam molestiae?
              </p>
              <div className="flex justify-center items">
                <button className="transition ease-in-out duration-150 bg-[#6366F1] hover:bg-[#5F56D6] active:bg-[#5B45BB] px-8 py-3 rounded-lg text-white mt-4">
                  Get Support
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-[170px] max-w-[300px] mx-auto">
            <div className="border border-black p-4">
              <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-red-300 ">
                Media
              </h3>
              <p className=" leading-8 font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                nisi pariatur accusantium. Laboriosam architecto adipisci quasi
                atque cupiditate et ducimus.
              </p>
              <div className="flex justify-center items">
                <button className="transition ease-in-out duration-150 bg-[#6366F1] hover:bg-[#5F56D6] active:bg-[#5B45BB] px-8 py-3 rounded-lg text-white mt-4">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-[170px] max-w-[300px] mx-auto">
            <div className="border border-black p-4">
              <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-blue-300 ">
                Partnerships
              </h3>
              <p className="leading-8 font-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium tempora accusantium eaque sapiente eos sequi,
                nesciunt nihil aperiam magni consectetur.
              </p>
              <div className="flex justify-center items">
                <button className="transition ease-in-out duration-150 bg-[#6366F1] hover:bg-[#5F56D6] active:bg-[#5B45BB] px-8 py-3 rounded-lg text-white mt-4">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-neutral-800">
        <div className="pt-28 pb-14 px-20 flex flex-col justify-center items-center">
          <h2 className="text-6xl tracking-wider text-center text-white font-light  md:whitespace-nowrap pb-10">
            Check out our duggout.
          </h2>
          <em className="mb-12 font-extralight text-white text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            reiciendis totam possimus error recusandae dolore aut modi accusamus
            voluptatibus ipsa.
          </em>
        </div>
        <div className="mx-16 grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 pb-16">
          <div className="flex flex-col sm:flex-row gap-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.2556724694364!2d-117.15128401448122!3d32.758949817037035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954e1cf32b25f%3A0x19bfe09db0698b63!2sLestat&#39;s%20on%20Park!5e0!3m2!1sen!2sus!4v1685728916392!5m2!1sen!2sus"
              width="full"
              height="full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div>
              <p className="text-white font-medium mb-4 text-xl tracking-wider border-r border-white ">
                Lestats on Park
              </p>
              <p className="text-white font-light pr-3">
                Since we are solely remote work, we currently do not have a
                headquarters. However we do frequent this coffee shop. Feel free
                to stop by and tell them Art sent you!
              </p>
              <br />
              <p className="text-white font-light pr-3">
                For those who we work with locally, this will typically be our
                meet up location unless stated otherwise
              </p>
            </div>
          </div>
          <div className="pl-10 pt-8 grid gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-white font-medium">
                North America (Toll Free)
              </p>
              <p className="text-white font-light">619-123-4567</p>
            </div>
            <div className="">
              <p className="text-white">
                We have language support for English and Spanish speakers!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
