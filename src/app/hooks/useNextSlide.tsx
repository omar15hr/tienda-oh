import { useState } from "react";
import { bestSellersProducts } from "../data/bestSellersProducts.data";

export default function useNextSlide() {
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

  return {
    prevSlide,
    nextSlide,
    setIsTransitioning,
    setCurrentIndex,
    currentIndex,
    isTransitioning,
    visibleProducts,
  };
}
