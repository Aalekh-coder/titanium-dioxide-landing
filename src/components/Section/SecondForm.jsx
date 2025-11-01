import React from "react";

const SecondForm = () => {
  return (
    <div className="bg-[#E2A651] mb-10 rounded-3xl px-5 py-5">
      <h3 className="font-extrabold text-4xl">How May We Help You!</h3>

      <form action="" className="text-white my-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            className="bg-white focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="contact" className="font-medium">
            Contact Number *
          </label>
          <input
            type="text"
            id="contact"
            className="bg-white focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="(XX) XXX-XXX"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label
            htmlFor="productSelect"
            className=" font-medium mb-1"
          >
            Product Select
          </label>
          <select
            type=""
            id="productSelect"
            className="border-black border px-1 py-2 bg-white text-black"
          >
            <option value="">Products Select</option>
            <option value="titaniumDioxide">Titanium Dioxide Ti</option>
            <option value="titaniumDioxideRutile">
              Titanium Dioxide Rutile
            </option>
            <option value="lithopone">Lithopone</option>
            <option value="opticalBrighter">Optical Brighter</option>
            <option value="carbon">Carbon</option>
            <option value="calciumCarbonate">Calcium Carbonate</option>
          </select>
        </div>
         <div className="flex flex-col my-3">
          <label htmlFor="email" className="font-medium">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            className="bg-white focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="Your Email"
          />
        </div>
         <div className="flex flex-col">
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            type="email"
            id="message"
            className="bg-white focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="Message"
          />
        </div>

        <button className="bg-black mt-5 px-5 w-full py-2 font-medium rounded">Submit</button>
      </form>
    </div>
  );
};

export default SecondForm;
