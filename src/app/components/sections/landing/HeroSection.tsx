"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover flex h-dvh w-full flex-col overflow-hidden"
      style={{
        backgroundImage: `url('/images/hero.jpeg')`,
      }}
    >
      <main className="container mx-auto flex flex-1 flex-col items-center sm:items-start justify-start mt-20 sm:mt-25 overflow-hidden px-8 sm:px-20">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <button className="border-default-100 bg-default-50 text-small text-default-500 h-9 overflow-hidden border-1 px-[18px] py-2 leading-5 font-normal">
            New onboarding experience
          </button>
          <div className="text-center text-[clamp(50px,20vw,54px)] leading-[1.2] font-bold tracking-tighter sm:text-[74px] text-black">
            <h1 className="bg-clip-text">
              Easiest way to <br /> power global teams.
            </h1>
          </div>
          <p className="text-default-500 text-center leading-7 font-normal sm:w-[466px] sm:text-[18px]">
            Acme makes running global teams simple. HR, Payroll, International
            Employment, contractor management and more.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="bg-default-foreground text-small text-background h-10 w-[163px] px-[16px] py-[10px] leading-5 font-medium">
              Get Started
            </button>
            <button className="border-black text-small h-10 w-[163px] border-1 px-[16px] py-[10px] leading-5 font-medium">
              See our plans
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
