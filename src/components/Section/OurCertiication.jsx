import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const OurCertification = () => {
  const image = [
    "/image/dgg.webp", 
    "/image/dg.webp",
    "/image/fg.webp"
    ];

  return (
    <div className="mb-10" id="certification">
      <h3 className="font-bold text-4xl px-5 text-center">
        Our Certifications
      </h3>

      <div className="my-5">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm relative"
        >
          <CarouselContent>
            {image.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={item}
                    width={500}
                    height={500}
                    alt="certification"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OurCertification;
