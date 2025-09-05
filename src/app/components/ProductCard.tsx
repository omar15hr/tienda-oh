import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "../interfaces/product.interface";

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.variant}`}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-gray-900 text-lg">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.variant}</p>
          </div>
          <p className="font-bold text-xl text-gray-900">${product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}
