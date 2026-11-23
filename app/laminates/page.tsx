import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { Search, Filter } from "lucide-react";

export default function LaminatesPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-background py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-6">Our Laminate Collection</h1>
        <p className="max-w-2xl mx-auto text-background/80">
          Browse our extensive catalogue of premium decorative surfaces. Use the filters below to find the perfect finish for your project.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <Filter size={18} /> Filters
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60 mb-3">Collection</h4>
                  <ul className="space-y-2 text-sm">
                    {collections.map(c => (
                      <li key={c.id}>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="accent-accent" />
                          <span>{c.name}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60 mb-3">Finish</h4>
                  <ul className="space-y-2 text-sm">
                    {["Matte", "High Gloss", "Textured", "Brushed", "Suede"].map(f => (
                      <li key={f}>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="accent-accent" />
                          <span>{f}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="mb-8 relative">
              <input 
                type="text" 
                placeholder="Search laminate by name or code..."
                className="w-full border border-secondary/50 bg-white px-12 py-3.5 focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" size={20} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id} className="group border border-secondary/30 bg-white hover:border-primary transition-colors">
                  <div className="relative aspect-[4/3] bg-secondary/10 overflow-hidden">
                    {product.image && (
                      <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-accent tracking-wider mb-2 uppercase">
                      {product.collection}
                    </div>
                    <h3 className="text-xl font-medium text-primary mb-1">{product.name}</h3>
                    <p className="text-sm text-charcoal/60 mb-4">
                      {product.finish} · Code: {product.code}
                    </p>
                    <Link 
                      href={`/laminates/${product.id}`}
                      className="block text-center border border-primary text-primary px-4 py-2 text-sm hover:bg-primary hover:text-background transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
