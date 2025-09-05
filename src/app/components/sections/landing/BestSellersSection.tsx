"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Icons";
import ProductCard from "../../ProductCard";
import { bestSellersProducts } from "@/app/data/bestSellersProducts.data";

export default function BestSellersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev + 1) % Math.ceil(bestSellersProducts.length / 3)
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(bestSellersProducts.length / 3)) %
        Math.ceil(bestSellersProducts.length / 3)
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const visibleProducts = bestSellersProducts.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            MÁS VENDIDOS
          </h2>
          <p className="text-lg max-w-2xl mx-auto font-poppins">
            Discover our most popular footwear, loved by customers worldwide
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous products"
          >
            <ChevronLeftIcon />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next products"
          >
            <ChevronRightIcon />
          </button>

          <div className="overflow-hidden mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleProducts.map((product, index) => (
                  <ProductCard key={index} product={product} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: Math.ceil(bestSellersProducts.length / 3),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
