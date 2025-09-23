"use client";

import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  mobileImageUrl?: string;
}

export default function HeroSection({
  title,
  description,
  imageUrl,
  mobileImageUrl,
}: Props) {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat flex h-dvh w-full flex-col overflow-hidden hero-section"
      style={
        {
          "--bg-mobile": `url('${imageUrl}')`,
          "--bg-desktop": `url('${mobileImageUrl || imageUrl}')`,
          backgroundImage: "var(--bg-mobile)",
        } as React.CSSProperties
      }
    >
      <main className="container mx-auto flex flex-1 flex-col items-center sm:items-start justify-start mt-20 sm:mt-30 overflow-hidden px-8 sm:px-20">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <div className="text-center text-[clamp(50px,20vw,54px)] leading-[1.2] font-bold tracking-tighter sm:text-[74px] text-black">
            <h1 className="bg-clip-text font-montserrat max-w-lg">{title}</h1>
          </div>
          <p className="text-center leading-7 font-normal sm:w-[466px] sm:text-[18px] font-poppins">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/category/women"
              className="bg-black text-center text-white text-small h-10 w-[183px] px-[16px] py-[10px] leading-5 font-medium font-poppins cursor-pointer"
            >
              Nueva Colección
            </Link>
            <Link
              href="/"
              className="border-black text-center text-small h-10 w-[183px] border-1 px-[16px] py-[10px] leading-5 font-medium font-poppins cursor-pointer"
            >
              Comprar ahora
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
