import { Product } from "@/interfaces/product.interface";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
