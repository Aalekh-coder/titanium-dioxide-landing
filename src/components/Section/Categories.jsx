import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Categories = () => {
  const cardsDetails = [
    {
      title: "Titanium Dioxide",
      id: 1,
      image: "/image/wrwewere.webp",
    },
    {
      title: "Titanium Dioxide Rutile",
      id: 2,
      image: "/image/imagee.webp",
    },
    {
      title: "Optical Brighter",
      id: 3,
      image: "/image/p1.webp",
    },
    {
      title: "Caustic Soda",
      id: 4,
      image: "/image/setts.webp",
    },
    {
      title: "Carbon",
      id: 5,
      image: "/image/dsd.webp",
    },
    {
      title: "Calcium Carbonate",
      id: 6,
      image: "/image/p4.webp",
    },
  ];

  return (
    <div className="bg-[#2E2A20] mb-10 py-10 px-5">
      <h3 className="text-[#DF9E42] flex gap-3 items-center font-medium">
        <Image
          src={"/image/cookie-30.webp"}
          width={30}
          height={30}
          alt="cookie"
        />{" "}
        OUR BEST PRODUCTS
      </h3>

      <p className="text-white text-5xl font-bold mt-2">Our Categories</p>

      <button className="text-[#DF9E42] border-[#DF9E42] border-2 px-5 py-2 rounded-full my-8 ">
        View All Products
      </button>

      <span className="border-b border-[#DF9E42] h-1 w-full block my-5" />

      <div className="grid grid-cols-1 gap-5 ">
        {cardsDetails.map(({ title, id, image }, idx) => (
          <div key={idx} className="relative">
            <Image
              src={image}
              width={400}
              height={400}
              alt={title}
              className="rounded-4xl"
            />
            <div className="absolute inset-x-5 bottom-0 px-5 py-5 rounded-full flex items-center justify-center bg-gradient-to-t from-[#2E2A20]/90 to-[#2E2A20]/20 text-white">
              <div>
                <p className="font-bold text-xl">{title}</p>
              </div>
              <div>
                <button className="bg-[#DF9E42] px-4 py-2 rounded-full">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#B6801E] text-white rounded mt-10 mx-auto font-md text-lg  flex items-center gap-1 py-3 px-5 justify-center">
        Get a Price Estimate <MoveUpRight />
      </button>
    </div>
  );
};

export default Categories;
