// This is a Next.js 13+ app directory page

import { products } from "@/lib/products";
import Header from "@/components/Header";
import ProductCard from "@/components/ui/ProductCard";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection />

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          The latest. Take a look at whats new.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Apple is the best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Eco-friendly</h3>
              <p className="text-gray-600">
                We're carbon neutral. And by 2030, all our products will be too.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Privacy</h3>
              <p className="text-gray-600">
                We design our products to protect your privacy and give you
                control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Built-in features that help you get the most out of Apple.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
