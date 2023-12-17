import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-2xl lg:max-w-7xl px-4 sm:pb-6 lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Where Style Meets Uniqueness
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus porro numquam architecto vero consectetur placeat et
            ullam dignissimos, amet tenetur.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={"/cover-2.jpg"}
              alt="cover-2"
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={"/cover-3.jpg"}
              alt="Cover-3"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
