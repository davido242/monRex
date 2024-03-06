import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, MouseEvent } from "react";
import { NameContext } from "../AuthContext/NameContext";
import { CartContext } from "../AuthContext/CartContext";
import Image from "next/image";

export default function header() {
  const { name, setName }: any = useContext(NameContext);
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setName("");
    router.push("/login");
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const handleHomePage = () => {
    if (name == "") {
      router.push("/");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <header className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] fixed w-full z-[2]">
      <div className="text-white bg-black flex justify-center gap-12 text-sm py-4  ">
        <Image src="/assets/images/arrow-right.svg" className="rotate-180" alt="left icon" width="12" height="15" />
        <p>Free Delivery When You Spend £70+</p>
        <Image src="/assets/images/arrow-right.svg" alt="right icon" width="12" height="15" />
      </div>
      <div>
        <div className="container mx-auto px-8 py-2 flex justify-between items-center">
          <div className="uppercase text-black font-bold text-[50px] cursor-pointer" onClick={handleHomePage}>
            DayRe<span className="text-xl">x</span>
          </div>
          <div>
            <ul className="hidden md:flex gap-6 text-sm megaMenu">
              <li className="group">
                <Link href="#" className="text-black topLink">
                  New Arrivals
                </Link>
                <div className="hiddenDropdown">
                  <div className="bg-white p-12">
                    <div className="flex gap-3 justify-center">
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Men</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Women</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Kids</p>
                      </Link>                      
                    </div>
                  </div>
                </div>
              </li>             
              <li className="group">
                <Link href="#" className="text-black topLink">
                  Men
                </Link>
                <div className="hiddenDropdown">
                  <div className="bg-white p-12">
                    <div className="flex gap-3 justify-center">
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Men</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Women</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Kids</p>
                      </Link>                      
                    </div>
                  </div>
                </div>
              </li>             
              <li className="group">
                <Link href="#" className="text-black topLink">
                  Women
                </Link>
                <div className="hiddenDropdown">
                  <div className="bg-white p-12">
                    <div className="flex gap-3 justify-center">
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Men</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Women</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Kids</p>
                      </Link>                      
                    </div>
                  </div>
                </div>
              </li>             
              <li className="group">
                <Link href="#" className="text-black topLink">
                  Kids
                </Link>
                <div className="hiddenDropdown">
                  <div className="bg-white p-12">
                    <div className="flex gap-3 justify-center">
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Men</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Women</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Kids</p>
                      </Link>                      
                    </div>
                  </div>
                </div>
              </li>             
              <li className="group">
                <Link href="#" className="text-black topLink">
                  Accessories
                </Link>
                <div className="hiddenDropdown">
                  <div className="bg-white p-12">
                    <div className="flex gap-3 justify-center">
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Men</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Women</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Kids</p>
                      </Link>                      
                    </div>
                  </div>
                </div>
              </li>             
              <li className="group">
                <Link href="#" className="text-black topLink">
                  Sale
                </Link>
                <div className="hiddenDropdown">
                  <div className="bg-white p-12">
                    <div className="flex gap-3 justify-center">
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Men</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Women</p>
                      </Link>
                      <Link href="#">
                        <Image
                          src="/assets/images/mobile-banner.webp"
                          className="rounded-xl"
                          alt="banner"
                          height="150"
                          width="230"
                        />
                        <p className="text-center font-bold uppercase pt-4">Kids</p>
                      </Link>                      
                    </div>
                  </div>
                </div>
              </li>             
            </ul>
          </div>
          <div>
            {name == "" ? (
              <ul className="flex gap-3">
                <li>
                  <Link href="/signup">Register</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            ) : (
              <div className="flex gap-3 items-center">
                <button onClick={handleLogout} className="cursor-pointer hover:bg-[#e17800] bg-[#e16800] p-2 md:p-4">
                  Logout
                </button>
                <div className="hidden md:block">{`Hi ${name}`}</div>
                <button onClick={goToCart} className="relative cursor-pointer pt-1">
                  <Image src="/assets/images/cart.svg" alt="cart icon" width="30" height="30" />
                  {cartItems.length === 0 ? (
                    ""
                  ) : (
                    <span className="absolute -top-1 -right-2 bg-[#e16800] h-4 w-4 p-3 flex justify-center rounded-full items-center text-[12px] font-bold">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
