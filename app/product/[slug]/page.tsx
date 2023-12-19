import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import React from "react";

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
      <div></div>
    </div>
  );
}
