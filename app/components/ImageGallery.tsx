"use client";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/sanity";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImg, setBigImg] = useState(images[0]);
  const handleClickImg = (image: any) => {
    setBigImg(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleClickImg(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden bg-gray-200 rounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImg).url()}
          alt="big-img"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute top-0 left-0 rounded-br-lg text-sm px-3 py-1.5 tracking-wider bg-red-500 uppercase text-white">sale</span>
      </div>
    </div>
  );
}
