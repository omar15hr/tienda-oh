import HeroSection from "../components/sections/landing/HeroSection";
import OriginSection from "../components/sections/landing/OriginSection";
import ImagesSection from "../components/sections/landing/ImagesSection";
import ProductListSection from "../components/sections/landing/ProductListSection";
import { initialData } from "@/seed/seed";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import BestSellersSection from "@/components/sections/landing/BestSellersSection";

const products = initialData.products;

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BestSellersSection />
      <OriginSection />
      <ImagesSection />
      <ProductListSection />

      <ProductGrid products={products} />
    </div>
  );
}
