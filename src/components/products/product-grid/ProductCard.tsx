"use client";

import { Product } from "@/interfaces/product.interface";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  const [displayName, setDisplayName] = useState(product.images[0]);

  return (
    <motion.div
      key={product.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white group hover:shadow-lg shadow transition-shadow duration-300"
    >
      <Link
        href={`/product/${product.slug}`}
        className="aspect-square overflow-hidden bg-gray-50"
      >
        <Image
          src={`${displayName}`}
          alt={`${product.title} - ${product.slug}`}
          width={800}
          height={800}
          className="object-cover transition-transform duration-300 cursor-pointer"
          // onMouseEnter={() => setDisplayName(product.images[1])}
          // onMouseLeave={() => setDisplayName(product.images[0])}
        />
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2 font-poppins">
          <div>
            <Link
              href={`/product/${product.slug}`}
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
