import React from "react";
import Image from "next/image";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

async function getData() {
  const query = `*[_type=="product"][0...4]| order(_createdAt desc){
      _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageURL": images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 lg:max-w-7xl lg:px-8 sm:py-24 ">
        <div className="flex justify-between items-center">
          <h1 className="tracking-wide font-bold text-gray-900 text-2xl md:text-4xl">
            Our Newest Product
          </h1>
          <Link
            href={"/all"}
            className="flex items-center gap-x-1 text-[#DC143C] text-2xl"
          >
            See all <FaArrowRight />
          </Link>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden bg-gray-200 rounded-md group-hover:opacity-70 lg:h-80">
                <Image
                  src={product.imageURL}
                  alt="product Image"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-4 flex  justify-between gap-1">
                <div>
                  <h3 className="mt-2 text-gray-700 text-sm">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-gray-500 text-sm">
                    {product.categoryName}
                  </p>
                </div>
                <p className="mt-2 text-gray-900 text-sm font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
