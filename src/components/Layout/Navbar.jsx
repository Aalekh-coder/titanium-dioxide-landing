"use client";
import { Menu, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Navbar = () => {
  const [status, setStatus] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const name = form.querySelector("#name").value;
    const phone = form.querySelector("#contact").value;
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
        const whatsappText = `Hi, I am ${name}.\nProduct: ${product}\nEmail: ${email}\n\nMessage: ${message}\n\nContact: ${phone}`;
        const waUrl = `https://wa.me/918527557778?text=${encodeURIComponent(
          whatsappText
        )}`;

        // Delay WhatsApp redirect by 1 second to show success message
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
    <div className="h-[14vh] w-full z-20 sticky top-0 bg-white flex justify-around items-center">
      <Image src={"/image/logo.webp"} width={70} height={70} alt="logo" />

      <Sheet>
        <SheetTrigger asChild>
          <span className="bg-gray-200 p-1">
            <Menu />
          </span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader className={"hidden"}>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center space-y-3 py-5">
            <Link
              href="/"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              Products
            </Link>
            <Link
              href="#certification"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              certification
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-[#B6801E] text-white text-sm flex items-center gap-1 py-2 px-2">
            Get a Quote <MoveUpRight />
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
                  className="bg-white text-black focus:outline-none py-1 px-4 placeholder:text-gray-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col my-1">
                <label htmlFor="contact" className="font-medium">
                  Contact Number *
                </label>
                <input
                  type="text"
                  id="contact"
                  className="bg-white text-black focus:outline-none py-1 px-4 placeholder:text-gray-400"
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
                  className=" border px-1 py-2 bg-white text-black "
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
                  className="bg-white text-black focus:outline-none py-1 px-4 placeholder:text-gray-400"
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
                  className="bg-white text-black focus:outline-none py-1 px-4 placeholder:text-gray-400"
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
    </div>
  );
};

export default Navbar;
