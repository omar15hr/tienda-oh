"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon, CartIcon, HeartIcon } from "@/components/Icons";
import SearchInput from "../SearchInput";

export type DropdownState = {
  isActive: boolean;
  idx: number | null;
};

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    {
      title: "Mujeres",
      path: "javascript:void(0)",
      isDrapdown: true,
    },
    {
      title: "Hombres",
      path: "javascript:void(0)",
      isDrapdown: true,
    },
    {
      title: "Niños",
      path: "javascript:void(0)",
      isDrapdown: true,
    },
    {
      title: "Explora",
      path: "javascript:void(0)",
      isDrapdown: true,
    },
  ];

  return (
    <header>
      <nav
        className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
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
                onClick={() => setState(!state)}
              >
                {state ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="group">
                  <Link href={item.path} className="flex gap-3 items-center">
                    <span className="text-gray-800 duration-200 group-hover:text-indigo-600 font-poppins text-sm font-medium md:text-base">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <SearchInput />
                <div className="flex items-center gap-x-4">
                  <Link href="">
                    <CartIcon />
                  </Link>
                  <Link href="">
                    <HeartIcon />
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </header>
  );
}
