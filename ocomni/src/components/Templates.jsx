import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import template1 from "../assets/images/template1.png";
import template2 from "../assets/images/template2.png";
import template3 from "../assets/images/template3.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
{
  /*Above I imported some swiper classes or whatever. Don't forget to npm install if cloned.*/
}
const Template = () => {
  {
    /* I created a projects class to contain objects of the img name and a cta for downloading the specific project...*/
  }
  const Templates = [
    {
      img: template1,
      name: "String of Template 1 Name",
      download_link: "#",
    },
    {
      img: template2,
      name: "String of Template 2 Name",
      download_link: "#",
    },
    {
      img: template3,
      name: "String of Template 3 Name",
      download_link: "#",
    },
  ];
  {
    /* Below is the return method which will render in the browser.*/
  }
  return (
    <section id="templates" className="py-10 text-white">
      <div className="text-center">
        <h2 className="mt-2 text-black text-4xl font-semibold">
          Free Templates
        </h2>
        <p className="text-black mt-3 text-lg">
          <span className="underline hover:cursor-pointer hover:text-decoration-line:none">
            Sign up
          </span>{" "}
          for a FREE template
        </p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <Swiper
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
          {Templates.map((Template_info, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-white rounded-xl">
                <img
                  src={Template_info.img}
                  alt="downloadable template"
                  className="rounded-lg"
                />
                <h3 className="text-xl my-4"></h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center ">
        {/* <a
          href={Templates.download_link}
          target="_blank"
          className="rounded mb-8 mt-4 px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider"
        >
          Get Template!
        </a> */}
        <form action="submit">
          <button className="bg-[#6366F1] shadow-lg rounded-md px-8 py-2 w-full">
            Get Template
          </button>
        </form>
      </div>
    </section>
  );
};
/* Above are objects housing some template card properties.*/

export default Template;
