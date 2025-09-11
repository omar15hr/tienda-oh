import HeroSection from "../components/HeroSection";
import OriginSection from "../components/sections/landing/OriginSection";
import ImagesSection from "../components/sections/landing/ImagesSection";
import ProductListSection from "../components/sections/landing/ProductListSection";
import BestSellersSection from "@/components/sections/landing/BestSellersSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="BIENVENIDOS A DISEÑOS OH"
        description="Acme makes running global teams simple. HR, Payroll, International
            Employment, contractor management and more."
        imageUrl="/images/hero-mobile.jpg"
        mobileImageUrl="/images/hero.jpeg"
      />
      <BestSellersSection />
      <OriginSection />
      <ImagesSection />
      <ProductListSection />
    </div>
  );
}
