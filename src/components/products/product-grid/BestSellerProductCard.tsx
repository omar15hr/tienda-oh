"use client";

import { Product } from "@/interfaces/product.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function BestSellerProductCard({ product }: Props) {
  return (
    <motion.div
      key={product.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white group hover:shadow-lg transition-shadow duration-300"
    >
      <Link
        href={`/products/${product.images[0]}`}
        className="aspect-square overflow-hidden bg-gray-50"
      >
        <Image
          src={`/images/sweater.jpg`}
          alt={`${product.title} - ${product.slug}`}
          width={400}
          height={400}
          className="object-cover transition-transform duration-300 cursor-pointer"
        />
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link
              href={`product/${product.slug}`}
              className="font-medium text-gray-900 text-lg cursor-pointer"
            >
              {product.title}
            </Link>
            <p className="text-gray-600">{product.gender}</p>
          </div>
          <p className="font-bold text-xl text-gray-900">${product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}
