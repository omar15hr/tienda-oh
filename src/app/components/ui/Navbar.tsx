"use client";

import { useEffect, useState } from "react";
import { CartIcon, CloseIcon, HeartIcon, MenuIcon } from "../Icons";
import NavigationComponent from "../NavigationComponent";
import Link from "next/link";
import SearchInput from "../SearchInput";

export type DropdownState = {
  isActive: boolean;
  idx: number | null;
};

export default function Navbar() {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState<DropdownState>({
    isActive: false,
    idx: null,
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest(".nav-menu")) {
        setDrapdownState({ isActive: false, idx: null });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header>
      <nav
        className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="javascript:void(0)">
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
              <NavigationComponent
                drapdownState={drapdownState}
                setDrapdownState={setDrapdownState}
              />
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <SearchInput />
                <Link href="">
                  <CartIcon />
                </Link>
                <Link href="">
                  <HeartIcon />
                </Link>
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
