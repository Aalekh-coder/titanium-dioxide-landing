import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mb-10 px-4 py-5">
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

        <button className="bg-[#B6801E] text-white rounded my-3 mx-auto font-md text-lg  flex items-center gap-1 py-3 px-2 w-full justify-center">
          Unlock Your TiO <sub>2</sub> Solution <MoveUpRight />
        </button>

        <Image src={"/image/img1.webp"} width={500} height={500} alt="cement" />
    </div>
  );
};

export default About;
