"use client";
import Image from "next/image";
import ProductSlide from "./components/ProductList";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white pt-36">        
          <div className="relative w-full bg-[url('/assets/images/landing-banner.webp')] min-h-[35rem] bg-cover bg-center">
            <Image
              src="/assets/images/mobile-banner.webp"
              className="md:hidden"
              alt="banner"
              height="641"
              width="2500"
            />
            <div className="absolute bottom-12 flex w-full gap-8 justify-center">
              <button className="rounded-full px-12 py-4 uppercase text-[12px] font-medium bg-white cursor-pointer hover:bg-slate-300">
                Shop All
              </button>
              <button className="rounded-full px-12 py-4 uppercase text-[12px] font-medium bg-white cursor-pointer hover:bg-slate-300">
                Shop Men
              </button>
            </div>
          </div>
          <div className="container mx-auto pb-32">
            <h2 className="text-5xl text-center pt-8">New Arrivals</h2>
            <div className="flex font-bol uppercase text-sm gap-16 justify-center py-8">
              <p>Men</p>
              <p className="text-slate-500">Women</p>
              <p className="text-slate-500">Kids</p>
            </div>
            <ProductSlide />
          </div>
          <div className="relative w-full bg-[url('/assets/images/WEB-KIDS.webp')] min-h-[35rem] bg-cover bg-center">
            {/* <Image
              src="/assets/images/WEB-KIDS.webp"
              className="hidden md:block"
              alt="kids banner"
              height="641"
              width="2500"
            /> */}
            <Image
              src="/assets/images/MOB-KIDS.webp"
              className="md:hidden"
              alt="kids mobile banner"
              height="641"
              width="2500"
            />
            <div className="absolute bottom-12 flex w-full gap-8 justify-center">
              <button className="rounded-full px-12 py-4 uppercase text-[12px] font-medium bg-white cursor-pointer hover:bg-slate-300">
                Shop now
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-5xl text-center py-8">New Arrivals</h2>
          </div>
          <div className="relative w-full bg-[url('/assets/images/TRAINNING-WEB-BANNER.webp')] min-h-[35rem] bg-cover bg-center">
            {/* <Image
              src="/assets/images/TRAINNING-WEB-BANNER.webp"
              className="hidden md:block"
              alt="Training banner"
              height="641"
              width="2500"
            /> */}
            <Image
              src="/assets/images/TRAINING-MOB-BANNER.webp"
              className="md:hidden"
              alt="Training banner"
              height="641"
              width="2500"
            />
            <div className="absolute bottom-12 flex w-full gap-8 justify-center">
              <button className="rounded-full px-12 w-[180px] max-w-[180px] py-4 uppercase text-xs font-medium bg-white cursor-pointer hover:bg-slate-300">
                Shop Men
              </button>
              <button className="rounded-full px-12 w-[180px] max-w-[180px] py-4 uppercase text-xs font-medium bg-white cursor-pointer hover:bg-slate-300">
                Shop Women
              </button>
            </div>
          </div>
      </main>
    </>
  );
}
