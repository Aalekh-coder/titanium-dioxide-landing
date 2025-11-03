"use client";
import { MoveUpRight } from "lucide-react";

import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [status, setStatus] = useState(null);

  const style = {
    backgroundImage: `url("/image/Elegant_Background-7.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto",
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  const form = e.target;
  const name = form.querySelector("#name").value;
  const phone = form.querySelector("#phone").value; // Fixed here
  const product = form.querySelector("#productSelect").value;
  const email = form.querySelector("#email").value;
  // If you add a message field, also add:
  // const message = form.querySelector("#message").value;

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Contact", phone);
  formData.append("Product", product);
  formData.append("Email", email);
  // formData.append("Message", message); // If using message field

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/sales@aanyaenterprise.com",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      form.reset();

      // Prepare WhatsApp message
      const whatsappText = `Hi, I am ${name}.\nProduct: ${product}\nEmail: ${email}\nContact: ${phone}`;
      const waUrl = `https://wa.me/918527557778?text=${encodeURIComponent(
        whatsappText
      )}`;

      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1000);
    } else {
      setStatus("❌ Failed to send. Please try again.");
    }
  } catch (error) {
    console.error("FormSubmit Error:", error);
    setStatus("⚠️ Something went wrong. Please try later.");
  }
};


  return (
    <div className="">
      <Image
        src="/image/mobile-2-1024x853.webp"
        alt="banner"
        width={1000}
        height={1000}
        className=""
      />

      <div style={style} className="text-center py-5">
        <p className="text-red-500 font-medium text-xl mb-5">
          Reliable Titanium Dioxide Distributor for Bulk Supply
        </p>
        <p className="font-extrabold text-3xl">
          8+ Years of Trusted Distribution Experience
        </p>
      </div>

      <a
        href="tel:8920109583"
        className="bg-[#B6801E] text-white rounded-sm mx-auto font-md text-lg  flex items-center gap-1 py-3 px-2"
      >
        Call Us Now for Best Price in India <MoveUpRight />
      </a>

      <form onSubmit={handleSubmit} className="px-6 bg-gray-100 pt-5 pb-4">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-400 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-black border px-1 py-2 bg-white text-black"
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
              className="border-black border px-1 py-2 bg-white text-black"
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
            className="border-black border px-1 py-2 bg-white text-black"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label
            htmlFor="productSelect"
            className="text-gray-400 font-medium mb-1"
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
        <button
          type="submit"
          className="bg-[#B6801E] text-white rounded my-3 mx-auto font-md text-lg  flex items-center gap-1 py-3 px-2 w-full justify-center"
        >
          Connect us
        </button>

        {status && (
          <p className="text-center mt-4 text-sm text-white">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Hero;
