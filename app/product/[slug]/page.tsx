import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";

async function getData(slug: string) {
  const query = `*[_type=="product" && slug.current=="${slug}"][0]{
    _id,
      name,
      price,
      images,
      description,
     " slug": slug.current,
      "categoryName": category-> name
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Productpage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <button className=" px-2 py-1 flex items-center gap-x-2  rounded-full text-white bg-[#DC143C] hover:bg-[#DC143C]">
                <span>4.3</span>
                <FaStar size={16} />
              </button>
              <span className="text-sm text-gray-500 transition duration-100">
                100+ Ratings
              </span>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold md:text-2xl text-gray-800">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">Incl shipping</span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <LiaShippingFastSolid size={20} />
              <span className="text-sm">2-4 days shipping</span>
            </div>
            <div className="mb-6 flex gap-x-2 ">
              <button className="btn bg-[#DC143C] text-white hover:bg-white hover:text-[#DC143C] transition">
                Add to Cart
              </button>
              <button className="btn bg-[#DC143C] text-white hover:bg-white hover:text-[#DC143C] transition">
                Checkout Now
              </button>
            </div>
            <p className="text-base text-gray-500 tracking-wide mt-12">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
