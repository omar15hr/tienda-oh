import HeroSection from "@/components/HeroSection";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: { id: string };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  return (
    <div>
      <HeroSection title={""} description={""} imageUrl={""} />
    </div>
  );
}
