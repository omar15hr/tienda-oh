"use client";

import Link from "next/link";
import { useState } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/Icons";

export type DropdownState = {
  isActive: boolean;
  idx: number | null;
};

const navigation = [
  {
    title: "Mujeres",
    path: "/category/women",
    isDrapdown: true,
  },
  {
    title: "Hombres",
    path: "/category/men",
    isDrapdown: true,
  },
  {
    title: "Niños",
    path: "/category/kids",
    isDrapdown: true,
  },
  {
    title: "Uniformes",
    path: "/category/uniforms",
    isDrapdown: true,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
          isMenuOpen ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h1 className="font-autour text-4xl">OH</h1>
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="group">
                  <Link
                    href={item.path}
                    className="flex gap-3 items-center"
                    onClick={handleLinkClick}
                  >
                    <span className="text-gray-800 duration-200 group-hover:text-indigo-600 font-poppins text-sm font-medium md:text-base">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <Link
                  href={"https://wa.me/5493515555555"}
                  className="flex gap-2 items-center justify-center bg-black text-white text-small h-10 w-[193px] px-[18px] py-[10px] leading-5 font-medium font-poppins cursor-pointer"
                  onClick={handleLinkClick}
                >
                  <WhatsAppIcon />
                  Compra ahora
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {isMenuOpen ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={handleMenuClose}
        ></div>
      ) : (
        ""
      )}
    </header>
  );
}
