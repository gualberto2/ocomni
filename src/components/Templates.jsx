import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import template1 from "../assets/images/cowboy-2-template.png";
import template2 from "../assets/images/reshoot-glasses.png";
import template3 from "../assets/images/reshoot-flowers.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useNavigate, Link } from "react-router-dom";

const Template = () => {
  const Templates = [
    {
      img: template1,
      name: "String of Template 1 Name",
      download_link: "#",
      title: "Lifestyle and Clothing",
    },
    {
      img: template2,
      name: "String of Template 2 Name",
      title: "Toys and Goods",
      download_link: "#",
    },
    {
      img: template3,
      name: "String of Template 3 Name",
      title: "Courses",
      download_link: "#",
    },
  ];

  return (
    <section id="templates" className="py-10 text-white mb-28">
      <div className="text-center">
        <h2 className=" font-semibold text-gray-800 text-4xl ">
          Choose a free Template
        </h2>
        <p className="mt-3 text-lg text-neutral-600 font-medium">
          <span className="border-b-2 border-[#6366F1] hover:border-b-2 hover:border-[#8c8de4] hover:text-decoration-line:none transition duration-150 mr-2 hover:cursor-pointer ">
            Sign up
          </span>
          and get a FREE template
        </p>
      </div>
      <br />
      <div className="flex justify-center mb-6">
        {" "}
        {/*className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative" I am trying to see which parent div has an affect on the layout of the cards and practice my flex / alignment practice.*/}
        <Swiper /* Not completely sure if I can even add a classname and change the alignemt with the swiper components.*/
          slidesPreview={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {Templates.map((info, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center p-4 rounded-xl shadow-sm bg-neutral-100 hover:bg-neutral-200 transition duration-150 ease-in">
                {/* bg-gradient-to-tr from-red-700 to-blue-800 bg-[position:_90%_200%] hover:bg-[position:_700%_1000%] bg-[size:_200%] h-40 w-40 transition-all duration-500 */}{" "}
                {/*this is the parent div for img & h3 and seems to make them flex & flex col*/}
                <img
                  src={info.img}
                  alt="downloadable template"
                  className="rounded-lg" /* This rounded class does not make much of a visual difference */
                />
                <h4 className="text-md text-gray-800  font-semibold text-center my-4">
                  {/* This is the text that appears right under the image whih is the problem as it looks lopsided. */}
                  {info.title}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center ">
        <Link
          to="/templates"
          className="bg-[#6366F1] text-md whitespace-nowrap  font-semibold text-center shadow-md hover:shadow-lg rounded-md px-6 py-3 active:bg-[#5B45BB] hover:bg-[#5F56D6] transition ease-in-out duration-150 w-[40%] md:w-[50%]"
        >
          Select a template
        </Link>
      </div>
    </section>
  );
};

export default Template;
