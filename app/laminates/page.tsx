"use client";

import { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { Search, Filter, X, ChevronDown, ChevronUp } from "lucide-react";

function LaminatesContent() {
  const searchParams = useSearchParams();
  const initialCollection = searchParams.get("collection");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollections, setSelectedCollections] = useState<string[]>(
    initialCollection ? [initialCollection] : []
  );
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const finishes = ["Matte", "High Gloss", "Textured", "Brushed"];

  const toggleCollection = (id: string) => {
    setSelectedCollections(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleFinish = (finish: string) => {
    setSelectedFinishes(prev =>
      prev.includes(finish) ? prev.filter(f => f !== finish) : [...prev, finish]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCollections([]);
    setSelectedFinishes([]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCode = product.code.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesDesc) return false;
      }

      // Collection match (matches either collection id or collection name)
      if (selectedCollections.length > 0) {
        const productCollectionObj = collections.find(c => c.name.toLowerCase() === product.collection.toLowerCase());
        const productCollectionId = productCollectionObj ? productCollectionObj.id : product.collection.toLowerCase();
        const matches = selectedCollections.some(
          sc => sc.toLowerCase() === productCollectionId || sc.toLowerCase() === product.collection.toLowerCase()
        );
        if (!matches) return false;
      }

      // Finish match
      if (selectedFinishes.length > 0) {
        if (!selectedFinishes.some(f => f.toLowerCase() === product.finish.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCollections, selectedFinishes]);

  const hasActiveFilters = searchQuery || selectedCollections.length > 0 || selectedFinishes.length > 0;

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-background py-16 md:py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-4">Our Laminate Collection</h1>
        <p className="max-w-2xl mx-auto text-background/80 text-base md:text-lg">
          Browse our extensive catalogue of premium decorative surfaces. Use the filters below to find the perfect finish for your project.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="w-full flex items-center justify-between bg-white border border-secondary/40 px-5 py-3.5 text-sm font-medium text-primary shadow-sm"
          >
            <span className="flex items-center gap-2">
              <Filter size={18} /> Filters {hasActiveFilters && "(Active)"}
            </span>
            {isMobileFiltersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar */}
          <aside className={`w-full md:w-64 shrink-0 ${isMobileFiltersOpen ? "block" : "hidden md:block"}`}>
            <div className="md:sticky md:top-28 bg-white md:bg-transparent p-6 md:p-0 border md:border-0 border-secondary/30 shadow-sm md:shadow-none">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-secondary/30">
                <h3 className="font-medium text-lg flex items-center gap-2 text-primary">
                  <Filter size={18} /> Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-accent hover:underline flex items-center gap-1"
                  >
                    <X size={12} /> Clear all
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 mb-3">Collection</h4>
                  <ul className="space-y-2.5 text-sm">
                    {collections.map(c => {
                      const isChecked = selectedCollections.includes(c.id) || selectedCollections.includes(c.name);
                      return (
                        <li key={c.id}>
                          <label className="flex items-center gap-3 cursor-pointer text-charcoal/80 hover:text-primary">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleCollection(c.id)}
                              className="accent-accent w-4 h-4 rounded cursor-pointer"
                            />
                            <span>{c.name}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="border-t border-secondary/30 pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/60 mb-3">Finish</h4>
                  <ul className="space-y-2.5 text-sm">
                    {finishes.map(f => {
                      const isChecked = selectedFinishes.includes(f);
                      return (
                        <li key={f}>
                          <label className="flex items-center gap-3 cursor-pointer text-charcoal/80 hover:text-primary">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleFinish(f)}
                              className="accent-accent w-4 h-4 rounded cursor-pointer"
                            />
                            <span>{f}</span>
                          </label>
                        </li>
                      );
                    })}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laminate by name or code (e.g. Walnut, WL-204)..."
                className="w-full border border-secondary/50 bg-white px-12 py-3.5 focus:outline-none focus:border-primary transition-colors shadow-sm text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" size={18} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs text-charcoal/60 mb-6 flex justify-between items-center">
              <span>Showing {filteredProducts.length} of {products.length} products</span>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-accent underline hover:text-primary">
                  Reset filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white border border-secondary/30 p-8">
                <p className="text-charcoal/70 text-lg mb-4">No laminate products match your filter criteria.</p>
                <button
                  onClick={clearFilters}
                  className="bg-primary text-background px-6 py-2.5 text-sm font-medium hover:bg-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group border border-secondary/30 bg-white hover:border-primary transition-colors flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="relative aspect-[4/3] bg-secondary/10 overflow-hidden">
                        {product.image && (
                          <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                          {product.finish} Finish · Code: {product.code}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <Link 
                        href={`/laminates/${product.id}`}
                        className="block text-center border border-primary text-primary px-4 py-2.5 text-sm font-medium hover:bg-primary hover:text-background transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function LaminatesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background py-20 text-center">Loading catalogue...</div>}>
      <LaminatesContent />
    </Suspense>
  );
}
