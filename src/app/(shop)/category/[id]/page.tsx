import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const products = seedProducts.filter((product) => product.gender === id);

  const categoryMap: Record<
    string,
    { title: string; description: string; imageUrl: string }
  > = {
    women: {
      title: "Mujeres",
      description: "Ropa diseñada para mujeres",
      imageUrl: "/images/sweater.jpg",
    },
    men: {
      title: "Hombres",
      description: "Ropa diseñada para hombres",
      imageUrl: "/images/sweater.jpg",
    },
    kids: {
      title: "Niños",
      description: "Ropa diseñada para niños",
      imageUrl: "/images/sweater.jpg",
    },
    explore: {
      title: "Explora nuestro catálogo completo",
      description: "Todo nuestro mundo de ropa",
      imageUrl: "/images/sweater.jpg",
    },
  };

  const heroProps = categoryMap[id] || {
    title: "Categoría",
    description: "",
    imageUrl: "/images/sweater.jpg",
  };

  return (
    <div>
      <HeroSection
        title={heroProps.title}
        description={heroProps.description}
        imageUrl={heroProps.imageUrl}
      />

      <ProductGrid products={products} />
    </div>
  );
}
