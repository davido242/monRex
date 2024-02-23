import React, { useEffect } from "react";
import { Products } from "../../components/dummyProducts";
import Image from "next/image";
import ProductSlide from "../../components/ProductList";
import Link from "next/link";

const page = ({ params }: { params: { slug: string } }) => {
  const product = Products.find((item) => item.slug === params.slug);
  

  return (
    <>
      <section className="py-48">
        <div className="container mx-auto px-8">
          <div className="breadcrumb md:flex text-slate-400 text-xs hidden">
            <Link href="/" className="cursor-pointer">
              Home &nbsp;
            </Link>
            <p>
              {"/"} {product.name}
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-4 pt-8">
            <div className="md:pl-24">
              <Image src={product.image.front} alt={product.name} className="rounded-2xl " />
            </div>
            <div className="product-info w-2/4 pt-4 text-xs">
              <p className="name text-3xl">{product.name}</p>
              <p>{product.price}</p>
              <p className="font-bold py-2">Description:</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto pb-32">
          <h2 className="text-sm text-center pt-8">Recently Viewed</h2>
          <ProductSlide />
        </div>
      </section>
    </>
  );
};

export default page;
