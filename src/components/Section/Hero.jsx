import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const style = {
    backgroundImage: `url("/image/Elegant_Background-7.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto",
  };

  return (
    <div className="">
      <Image
        src="/image/mobile-2-1024x853.webp"
        alt="banner"
        width={"100"}
        height={"100"}
        className="w-full h-auto"
      />

      <div style={style} className="text-center py-5">
        <p className="text-red-500 font-medium text-xl mb-5">
          Reliable Titanium Dioxide Distributor for Bulk Supply
        </p>
        <p className="font-extrabold text-3xl">
          8+ Years of Trusted Distribution Experience
        </p>
      </div>

      <button className="bg-[#B6801E] text-white rounded-sm mx-auto font-md text-lg  flex items-center gap-1 py-3 px-2">
        Call Us Now for Best Price in India <MoveUpRight />
      </button>

      <form action="" className="px-6 bg-gray-100 pt-5 pb-4">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-400 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-black border px-1 py-2 bg-white"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-400 font-medium mb-1">
              Phone Number
            </label>
            <input
              type="number"
              minLength={10}
              maxLength={10}
              id="phone"
              className="border-black border px-1 py-2 bg-white"
              placeholder="(XX) XXXXX-XXX"
            />
          </div>
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="text-gray-400 font-medium mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border-black border px-1 py-2 bg-white"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="productSelect" className="text-gray-400 font-medium mb-1">
            Product Select
          </label>
          <select
            type=""
            id="productSelect"
            className="border-black border px-1 py-2 bg-white"
          >
            <option value="">Products Select</option>
            <option value="titaniumDioxide">
              Titanium Dioxide Ti
            </option>
            <option value="titaniumDioxideRutile">
              Titanium Dioxide Rutile
            </option>
            <option value="lithopone">Lithopone</option>
            <option value="opticalBrighter">Optical Brighter</option>
            <option value="carbon">Carbon</option>
            <option value="calciumCarbonate">Calcium Carbonate</option>
          </select>
        </div>
        <button className="bg-[#B6801E] text-white rounded my-3 mx-auto font-md text-lg  flex items-center gap-1 py-3 px-2 w-full justify-center">
          Connect us
        </button>
      </form>
    </div>
  );
};

export default Hero;
