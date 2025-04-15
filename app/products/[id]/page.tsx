import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import Header from "@/components/Header";
import Image from "next/image";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105 overflow-hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400 text-2xl">Product Image</span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{product.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Colors</h2>
              <div className="flex space-x-4">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-10 h-10 rounded-full border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
              <ul className="space-y-2">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">${product.price}</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
