import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Products = () => {
  const cardData = [
    {
      image: "/image/64-570x570.webp",
      title: "Titanium Dioxide (TiO₂) – Ttpl Shunk",
      link: "https://titaniumdioxidedistributors.com/product/titanium-dioxide-tio%e2%82%82-ttpl-shunk/",
    },
    {
      image: "/image/63-570x570.webp",
      title: "Titanium Dioxide (TiO₂) – Cosmos B101",
      link: "https://titaniumdioxidedistributors.com/product/titanium-dioxide-tio%e2%82%82-cosmos-b101/",
    },
    {
      image: "/image/62-570x570.webp",
      title: "Titanium Dioxide (TiO₂) – Taihai Group PDA1000",
      link: "https://titaniumdioxidedistributors.com/product/titanium-dioxide-tio%e2%82%82-taihai-group-pda1000/",
    },
    {
      image: "/image/61-570x570.webp",
      title: "Titanium Dioxide (TiO₂) – Cotiox KA100",
      link: "https://titaniumdioxidedistributors.com/product/titanium-dioxide-tio%e2%82%82-cotiox-ka100/",
    },
  ];

  return (
    <div className="">
      <h3 className="text-center font-extrabold mx-auto text-5xl px-5 mb-4">
        Titanium Dioxide Grades
      </h3>

      <p className="text-center my-2 text-lg ">
        At Aanya Enterprise, we are a trusted Titanium Dioxide Distributor,
        offering high-quality products for diverse industrial applications. Our
        Titanium Dioxide grades are reliable, consistent, and designed to
        deliver superior performance.
      </p>

      <div className="px-3 grid grid-cols-2 items-center gap-2">
        {cardData.map(({ image, title, link }, idx) => (
          <div key={idx} className="border flex flex-col items-center pb-3">
            <Image src={image} width={300} height={300} alt={title} />
            <p className="text-muted-foreground font-bold text-center ">{title}</p>

            <a
              href={link}
              className="bg-[#DF9E42] text-white text-sm px-5 py-2 my-2"
            >
              READ MORE
            </a>
          </div>
        ))}
      </div>

      <button className="bg-[#B6801E] text-white rounded my-3 font-md text-lg  flex items-center gap-1 py-3 px-2 mx-2 justify-center">
          Consistent Quality & Competitive Pricing <MoveUpRight />
        </button>
    </div>
  );
};

export default Products;
