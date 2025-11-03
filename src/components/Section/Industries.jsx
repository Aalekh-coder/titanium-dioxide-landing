"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, PhoneCall } from "lucide-react";

const Industries = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style = {
    backgroundImage: `linear-gradient(rgba(58,49,23,1.80), rgba(58,49,23,0.55)), url("/image/titanium-dioxide.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    width: "100%",
    height: "auto",
  };

  const cardcss = {};

  const slideData = [
    {
      image: "/image/11.webp",
      title: "Coatings",
      link: "",
    },
    {
      image: "/image/Plastics.webp",
      title: "Plastics",
      link: "",
    },
    {
      image: "/image/hg.webp",
      title: "Spacial Applications",
      link: "",
    },
    {
      image: "/image/as.webp",
      title: "Papers",
      link: "",
    },
    {
      image: "/image/sA.webp",
      title: "Inks",
      link: "",
    },
  ];

  return (
    <div
      className="mb-10 flex items-center justify-center flex-col py-10"
      style={style}
    >
      <h3 className="text-[#B6801E] flex gap-3 items-center">
        <Image
          src="/image/cookie-30.webp"
          width={30}
          height={30}
          alt="cookie"
        />{" "}
        INDUSTRIES WE SERVE
      </h3>
      <p className="text-white font-bold text-5xl text-center ">
        Serving Industries Across India & Abroad
      </p>

      <div className="w-full  mx-auto overflow-hidden mt-5">
        <Slider {...settings}>
          {slideData.map(({ title, image }, idx) => (
            <div className="px-4 relative text-center mx-auto group" key={idx}>
              <Image
                src={image}
                height={300}
                width={300}
                alt={title}
                className="rounded-full relative"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent rounded-full" />
              <div className="absolute text-[#2E2A20] font-bold text-2xl inset-x-0 bottom-14 text-center ">
                <p>{title}</p>
                <a href="https://titaniumdioxidedistributors.com" className="mt-4 flex items-center justify-center border-2 border-white w-20 h-20 mx-auto rounded-full">
                  <ChevronRight color="white" size={50} />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <a href="tel:8527557778" className="flex text-[#D79840] gap-4 border-[#D79840] border px-3 py-4 rounded-full mt-5">
        <PhoneCall /> Call Now
      </a>
    </div>
  );
};

export default Industries;
