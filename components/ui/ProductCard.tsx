"use client";

import { Product } from "@/lib/products";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <Link href={`/products/${product.id}`}>
        <div className="p-6">
          <div className="aspect-square bg-gray-100 mb-4 overflow-hidden relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover overeflow-hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">Product Image 1</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">From ${product.price}</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Buy
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
