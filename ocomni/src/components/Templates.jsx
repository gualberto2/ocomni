import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import template1 from "../assets/images/template1.png";
import template2 from "../assets/images/template2.png";
import template3 from "../assets/images/template3.png";
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
      title: "Lifestyle and Clothing Template",
    },
    {
      img: template2,
      name: "String of Template 2 Name",
      title: "Toys and Alike Template",
      download_link: "#",
    },
    {
      img: template3,
      name: "String of Template 3 Name",
      title: "Course Template",
      download_link: "#",
    },
  ];

  return (
    <section id="templates" className="py-10 text-white mb-24">
      <div className="text-center">
        <h2 className="mt-2 text-black text-4xl font-bold">Free Templates</h2>
        <p className="text-black mt-3 text-lg">
          <span className="border-b-2 border- hover:cursor-pointer hover:text-decoration-line:none">
            Sign up
          </span>
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
          {Templates.map((info, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-white rounded-xl">
                <img
                  src={info.img}
                  alt="downloadable template"
                  className="rounded-lg"
                />
                <h3 className="text-xl text-black uppercase font-medium text-center my-4">
                  {info.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center ">
        <Link
          to="/templates"
          className="bg-[#6366F1] text-center shadow-lg rounded-md px-8 py-2 w-[88%]"
        >
          Get Template
        </Link>
      </div>
    </section>
  );
};

export default Template;
