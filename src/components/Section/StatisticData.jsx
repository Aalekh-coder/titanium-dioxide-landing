import Image from "next/image";
import React from "react";

const StatisticData = () => {
  return (
    <div className="px-5 mb-10">
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-center text-3xl font-bold">
          Largest Titanium Dioxide (TiO<sub>2</sub>) Distributor in India
        </h3>

        <Image
          src={"/image/logo (3).webp"}
          width={80}
          height={80}
          alt="whatsapp logo"
        />
      </div>

      <div>
        <div className="my-8 flex flex-col gap-2">
          <Image
            src={"/image/quanqiu01-1.webp"}
            alt="logo"
            width={60}
            height={60}
          />
          <p className="font-bold text-2xl">100+</p>
          <p className="font-medium text-xl">Product Category</p>
          <p>
            From Coatings to Cosmetics - Titanium Dioxide for Every Industry
          </p>
        </div>
        <div className="my-8 flex flex-col gap-2">
          <Image
            src={"/image/quanqiu02.webp"}
            alt="logo"
            width={60}
            height={60}
          />
          <p className="font-bold text-2xl">200</p>
          <p className="font-medium text-xl">Professional Staff</p>
          <p>
           Is a manufacturer with 8 years of rich experience and a professional sales team.
          </p>
        </div>
        <div className="my-8 flex flex-col gap-2">
          <Image
            src={"/image/quanqiu03.webp"}
            alt="logo"
            width={60}
            height={60}
          />
          <p className="font-bold text-2xl">8+</p>
          <p className="font-medium text-xl">Years Of Experience</p>
          <p>
            A professional titanium dioxide manufacturer with 8+ years of rich experience.
          </p>
        </div>
        <div className="my-8 flex flex-col gap-2">
          <Image
            src={"/image/quanqiu04.webp"}
            alt="logo"
            width={60}
            height={60}
          />
          <p className="font-bold text-2xl">100</p>
          <p className="font-medium text-xl">Distributors</p>
          <p>
           Spreading high-quality Titanium Dioxide across industries
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticData;
