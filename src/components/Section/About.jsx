"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const About = () => {
  const [status, setStatus] = useState(null);
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  const form = e.target;
  const name = form.querySelector("#name").value;
  const phone = form.querySelector("#contact")?.value;
  const product = form.querySelector("#productSelect").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Contact", phone);
  formData.append("Product", product);
  formData.append("Email", email);
  formData.append("Message", message);

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
      const whatsappText = `Hi, I am ${name}.\nProduct: ${product}\nEmail: ${email}\nMessage: ${message}\nContact: ${phone}`;
      const waUrl = `https://wa.me/918810540823?text=${encodeURIComponent(whatsappText)}`;

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
    <div className="mb-10 px-4 py-5" id="about">
      <h3 className="flex items-center gap-2 font-semibold">
        <Image
          src="/image/cookie-30.webp"
          width={20}
          height={20}
          alt="cookies"
        />{" "}
        About Our Company
      </h3>

      <p className="text-4xl font-extrabold leading-10 mt-5">
        Trusted Titanium Dioxide Distributor - Aanya Enterprise
      </p>

      <p className="my-5">
        Looking for a{" "}
        <span className="font-bold text-zinc-800">
          reliable Titanium Dioxide Distributor
        </span>{" "}
        with{" "}
        <span className="font-bold text-zinc-800">
          consistent quality and timely delivery?
        </span>
      </p>

      <p className="my-5">
        <span className="font-bold text-zinc-800">Aanya Enterprise</span> is a
        trusted{" "}
        <span className="font-bold text-zinc-800">
          Titanium Dioxide Distributor,{" "}
        </span>{" "}
        supplying{" "}
        <span className="font-bold text-zinc-800">
          Rutile and Anatase grades
        </span>{" "}
        to industries like{" "}
        <span className="font-bold text-zinc-800">
          {" "}
          paints, plastics, coatings, paper, inks, and rubber.
        </span>
      </p>

      <p className="my-5">
        We deliver{" "}
        <span className="font-bold text-zinc-800">premium-grade TiO₂</span> with{" "}
        <span className="font-bold text-zinc-800">competitive pricing,</span>{" "}
        ensuring your operations run smoothly and efficiently. With{" "}
        <span className="font-bold text-zinc-800">years of experience,</span>{" "}
        our team focuses on{" "}
        <span className="font-bold text-zinc-800">
          building lasting{" "}
          <span className="font-bold text-zinc-800">partnerships</span>,{" "}
        </span>
        offering customized
        <span className="font-bold text-zinc-800"> solutions</span> and{" "}
        <span className="font-bold text-zinc-800">bulk supply</span> tailored to
        your needs.
      </p>

      <p className="my-5">
        <span className="font-bold text-zinc-800">
          Get a Free Quotation Today
        </span>{" "}
        – Partner with a distributor that guarantees
        <span className="font-bold text-zinc-800">
          quality, reliability, and growth for your business.
        </span>
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-[#B6801E] text-white rounded my-3 mx-auto font-md text-lg  flex items-center gap-1 py-3 px-2 w-full justify-center">
            Unlock Your TiO <sub>2</sub> Solution <MoveUpRight />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className={"hidden"}>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <DialogContent className="bg-[#EEE6CA] rounded-3xl px-5 ">
            <h3 className="font-bold text-xl text-center">
              Get Your Free sample Now
            </h3>
            <p className="text-sm text-center">
              Know the excellence of our &apos;A-Grade&apos; products by trying
              a free sample
            </p>

            <form onSubmit={handleSubmit} className="text-black my-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-white focus:outline-none py-1 px-4 placeholder:text-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col my-1">
                <label htmlFor="contact" className="font-medium">
                  Contact Number *
                </label>
                <input
                  type="number"
                  id="contact"
                  className="bg-white focus:outline-none py-1 px-4 placeholder:text-gray-400"
                  placeholder="(XX) XXX-XXX"
                />
              </div>

              <div className="flex flex-col mb-1">
                <label htmlFor="productSelect" className=" font-medium mb-1">
                  Product Select
                </label>
                <select
                  type=""
                  id="productSelect"
                  className=" border px-1 py-2 bg-white text-black"
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
                  className="bg-white focus:outline-none py-1 px-4 placeholder:text-gray-400"
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
                  className="bg-white focus:outline-none py-1 px-4 placeholder:text-gray-400"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white mt-5 px-5 w-full py-2 font-medium rounded"
              >
                Submit
              </button>
              {status && (
                <p className="text-center mt-4 text-sm text-white">{status}</p>
              )}
            </form>
          </DialogContent>
        </DialogContent>
      </Dialog>

      <Image src={"/image/img1.webp"} width={500} height={500} alt="cement" />
    </div>
  );
};

export default About;
