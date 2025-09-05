import BestSellersSection from "./components/sections/landing/BestSellersSection";
import HeroSection from "./components/sections/landing/HeroSection";
import OriginSection from "./components/sections/landing/OriginSection";
import ImagesSection from "./components/sections/landing/ImagesSection";
import ProductListSection from "./components/sections/landing/ProductListSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <BestSellersSection />
      <OriginSection />
      <ImagesSection />
      <ProductListSection />
    </div>
  );
}
